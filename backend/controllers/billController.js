const db = require('../config/db');

// Add or update bill using the stored procedure
exports.addOrUpdateBill = (req, res) => {
    const { patient_id, amount } = req.body;

    const query = 'CALL add_or_update_inpatient_bill(?, ?, NULL)';
    db.query(query, [patient_id, amount], (err, results) => {
        if (err) {
            console.error('Error executing stored procedure:', err);
            return res.status(500).json({ message: 'Error processing bill.' });
        }
        res.status(201).json({ message: 'Bill processed successfully.' });
    });
};

// Get all bills for a specific user by Pid
exports.getBillsByUser = (req, res) => {
    const { pid } = req.params;

    const billQuery = 'SELECT * FROM Bills WHERE Pid = ?';
    db.query(billQuery, [pid], (err, results) => {
        if (err) {
            console.error('Error fetching bills:', err);
            return res.status(500).json({ message: 'Error fetching bills.' });
        }
        res.status(200).json(results); // Return the list of bills
    });
};
