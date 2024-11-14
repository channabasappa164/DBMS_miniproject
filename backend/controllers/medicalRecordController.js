const db = require('../config/db');

// Get all medical records
exports.getAllRecords = (req, res) => {
    const query = 'SELECT Record_No, Pid, Eid, Report FROM medical_records';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching medical records:', err);
            return res.status(500).json({ message: 'Error fetching medical records.' });
        }
        res.json(results);
    });
};

// Add or update a medical record
exports.addOrUpdateRecord = (req, res) => {
    const { recordNo, pid, eid, report } = req.body;
    const query = `
        INSERT INTO medical_records (Record_No, Pid, Eid, Report)
        VALUES (?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE Pid = VALUES(Pid), Eid = VALUES(Eid), Report = VALUES(Report)
    `;
    db.query(query, [recordNo, pid, eid, report], (err, result) => {
        if (err) {
            console.error('Error saving medical record:', err);
            return res.status(500).json({ message: 'Error saving medical record.' });
        }
        res.json({ message: 'Medical record added/updated successfully!' });
    });
};
