const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Route to assign a room to a patient
router.post('/assign-room', async (req, res) => {
    const { patientId, roomId } = req.body;

    try {
        const query = "UPDATE patients SET Rid = ? WHERE pid = ?";
        await db.query(query, [roomId, patientId]);

        res.status(200).json({ message: `Room ${roomId} assigned to Patient ${patientId}` });
    } catch (err) {
        console.error('Error assigning room:', err);
        res.status(500).json({ message: 'Error assigning room.' });
    }
});

module.exports = router;
