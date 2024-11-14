const db = require('../config/db');

// Get all hospitals
exports.getAllHospitals = (req, res) => {
    db.query('SELECT * FROM Hospitals', (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error retrieving hospitals.' });
        }
        res.status(200).json(results);
    });
};

// Get hospital by ID
exports.getHospitalById = (req, res) => {
    const { hospitalId } = req.params;
    db.query('SELECT * FROM Hospitals WHERE Hid = ?', [hospitalId], (err, results) => {
        if (err || results.length === 0) {
            return res.status(404).json({ message: 'Hospital not found.' });
        }
        res.status(200).json(results[0]);
    });
};

// Get doctors by hospital ID
exports.getDoctorsByHospital = (req, res) => {
    const { hospitalId } = req.params;
    db.query('SELECT * FROM Doctors WHERE Did IN (SELECT Did FROM Departments WHERE Hid = ?)', [hospitalId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error retrieving doctors.' });
        }
        res.status(200).json(results);
    });
};

// Get services by hospital ID
exports.getServicesByHospital = (req, res) => {
    const { hospitalId } = req.params;
    db.query('SELECT * FROM Services WHERE Hid = ?', [hospitalId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error retrieving services.' });
        }
        res.status(200).json(results);
    });
};

// Get departments by hospital ID
exports.getDepartmentsByHospital = (req, res) => {
    const { hospitalId } = req.params;
    db.query('SELECT * FROM Departments WHERE Hid = ?', [hospitalId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error retrieving departments.' });
        }
        res.status(200).json(results);
    });
};
