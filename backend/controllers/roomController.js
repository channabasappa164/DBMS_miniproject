const db = require('../config/db');

exports.getAvailableRooms = (req, res) => {
    const { hospitalId } = req.params;
    const query = "SELECT * FROM rooms WHERE Hid = ? AND Availability = 1";
    db.query(query, [hospitalId], (err, results) => {
        if (err) {
            console.error('Error fetching rooms:', err);
            return res.status(500).send('Error fetching rooms');
        }
        res.json(results);
    });
};
