const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Route to assign a room to a patient and generate the bill
router.post('/assign-room', async (req, res) => {
    const { patientId, roomId, hospitalName, servicesUsed, employeeId } = req.body;

    try {
        // 1. Insert the inpatient record
        const admissionDate = new Date();
        const inpatientQuery = `INSERT INTO inpatient (Pid, Hname, Rid, Eid, AdmissionDate) VALUES (?, ?, ?, ?, ?)`;
        await db.promise().query(inpatientQuery, [patientId, hospitalName, roomId, employeeId, admissionDate]);

        // 2. Fetch room price
        const roomQuery = 'SELECT Price FROM rooms WHERE Rid = ?';
        const [room] = await db.promise().query(roomQuery, [roomId]);
        const roomPrice = room[0].Price;

        // 3. Insert room bill
        const roomBillQuery = `INSERT INTO bills (Pid, Amount, Method) VALUES (?, ?, ?)`;
        await db.promise().query(roomBillQuery, [patientId, roomPrice, 'Room Assignment']);

        // 4. Insert bills for each service
        for (let service of servicesUsed) {
            const serviceBillQuery = `INSERT INTO bills (Pid, Amount, Method) VALUES (?, ?, ?)`;
            await db.promise().query(serviceBillQuery, [patientId, service.Price, 'Service']);
        }

        res.status(200).json({ message: `Room ${roomId} and services assigned to Patient ID ${patientId}` });
    } catch (err) {
        console.error('Error assigning room or generating bill:', err);
        res.status(500).json({ message: 'Error assigning room or generating bill.' });
    }
});

// Route to retrieve a list of rooms currently occupied by a specific patient
router.get('/occupied-rooms/:patientId', async (req, res) => {
    const { patientId } = req.params;

    try {
        const occupiedRoomsQuery = `
            SELECT rooms.Rid, rooms.Type, rooms.Location, rooms.Price
            FROM inpatient
            JOIN rooms ON inpatient.Rid = rooms.Rid
            WHERE inpatient.Pid = ?
        `;
        const [occupiedRooms] = await db.promise().query(occupiedRoomsQuery, [patientId]);

        if (occupiedRooms.length === 0) {
            return res.status(404).json({ message: 'No occupied rooms found for this patient.' });
        }

        res.status(200).json(occupiedRooms);
    } catch (err) {
        console.error('Error fetching occupied rooms:', err);
        res.status(500).json({ message: 'Error fetching occupied rooms.' });
    }
});

// Route to discharge a specific room for a patient
router.delete('/discharge-room/:roomId/:patientId', async (req, res) => {
    const { roomId, patientId } = req.params;

    try {
        // 1. Delete the inpatient record for the specified room and patient
        const dischargeQuery = `DELETE FROM inpatient WHERE Rid = ? AND Pid = ?`;
        const [result] = await db.promise().query(dischargeQuery, [roomId, patientId]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'No matching record found for discharge.' });
        }

        // 2. Update room availability
        const updateRoomQuery = `UPDATE rooms SET Availability = 1 WHERE Rid = ?`;
        await db.promise().query(updateRoomQuery, [roomId]);

        res.status(200).json({ message: `Room ${roomId} has been discharged for Patient ID ${patientId}` });
    } catch (err) {
        console.error('Error discharging room:', err);
        res.status(500).json({ message: 'Error discharging room.' });
    }
});

module.exports = router;
