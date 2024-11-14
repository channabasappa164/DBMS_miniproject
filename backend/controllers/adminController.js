const db = require('../config/db');

// Fetch user by Patient ID
exports.getUserById = (req, res) => {
    const { pid } = req.params;
    const query = 'SELECT * FROM Patients WHERE Pid = ?';
    db.query(query, [pid], (err, results) => {
        if (err || results.length === 0) {
            return res.status(404).json({ message: 'Patient not found.' });
        }
        res.json(results[0]);
    });
};

// Update user by Patient ID
exports.updateUserById = (req, res) => {
    const { pid } = req.params;
    const updateData = req.body;
    const query = 'UPDATE Patients SET ? WHERE Pid = ?';
    db.query(query, [updateData, pid], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating user.' });
        }
        res.json({ message: 'User updated successfully.' });
    });
};


// Add a new user
exports.addUser = (req, res) => {
    const { pid, pname, bloodType, dob, sex, phoneNo, email, emergencyContact, insuranceProvider, password, address, patientType } = req.body;

    const query = `INSERT INTO Patients (Pid, Pname, Blood_type, DOB, Sex, Phone_No, Email, Emergency_Contact, Insurance_Provider, Password, Address, Patient_Type)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(query, [pid, pname, bloodType, dob, sex, phoneNo, email, emergencyContact, insuranceProvider, password, address, patientType], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error adding user to the database.' });
        }
        res.json({ message: 'User added successfully.' });
    });
};
