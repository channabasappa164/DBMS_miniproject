// routes/inpatientBillRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Route to fetch inpatient bills
router.get('/inpatient-bills/:pid', async (req, res) => {
    const { pid } = req.params;
    try {
        const query = 'SELECT * FROM bills WHERE Pid = ? AND Method = "Service"'; // Adjust as necessary
        const [bills] = await db.promise().query(query, [pid]);
        res.status(200).json(bills);
    } catch (err) {
        console.error('Error fetching inpatient bills:', err);
        res.status(500).json({ message: 'Error fetching inpatient bills.' });
    }
});

module.exports = router;
