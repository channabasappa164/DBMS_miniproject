const db = require('../config/db');

exports.getOccupiedRooms = (req, res) => {
    const { patientId } = req.params;

    const query = `
        SELECT rooms.Rid, rooms.Type, rooms.Location, rooms.Price
        FROM inpatient
        JOIN rooms ON inpatient.Rid = rooms.Rid
        WHERE inpatient.Pid = ?
    `;

    db.query(query, [patientId], (err, results) => {
        if (err) {
            console.error('Error fetching occupied rooms:', err);
            return res.status(500).json({ message: 'Error fetching occupied rooms' });
        }
        res.status(200).json(results);
    });
};
