const db = require('../config/db');

// Get all services function
exports.getAllServices = (req, res) => {
    const query = 'SELECT * FROM Services'; // Modify as per your table structure
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching services:', err);
            return res.status(500).json({ message: 'Error fetching services.' });
        }
        res.status(200).json(results);
    });
};
