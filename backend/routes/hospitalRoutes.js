// In hospitalRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Route to get all hospitals
router.get('/', async (req, res) => {
    try {
        const [hospitals] = await db.promise().query('SELECT * FROM hospitals');
        res.json(hospitals);
    } catch (error) {
        console.error('Error fetching hospitals:', error);
        res.status(500).json({ message: 'Error fetching hospitals' });
    }
});

module.exports = router;
