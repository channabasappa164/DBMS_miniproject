const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Route to fetch available rooms
router.get('/available', async (req, res) => {
    try {
        const query = 'SELECT * FROM rooms WHERE Availability = 1'; // Fetch available rooms
        const [rooms] = await db.promise().query(query); // Use .promise() for async queries
        res.status(200).json(rooms); // Return the available rooms
    } catch (err) {
        console.error('Error fetching rooms:', err);
        res.status(500).json({ message: 'Error fetching rooms.' });
    }
});

module.exports = router;
