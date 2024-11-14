// In serviceRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Route to get all services
router.get('/', async (req, res) => {
    try {
        const [services] = await db.promise().query('SELECT * FROM services');
        res.json(services);
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).json({ message: 'Error fetching services' });
    }
});

module.exports = router;
