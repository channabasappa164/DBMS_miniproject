const db = require('../config/db');

const Patient = {
    create: (data, callback) => {
        const query = 'INSERT INTO Patients (Pid, Pname, Blood_type, DOB, Sex, Phone_No, Email, Created_at, Emergency_Contact, Insurance_Provider, Password, Address, Patient_Type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(query, [data.Pid, data.Pname, data.Blood_type, data.DOB, data.Sex, data.Phone_No, data.Email, data.Created_at, data.Emergency_Contact, data.Insurance_Provider, data.Password, data.Address, data.Patient_Type], callback);
    },
    getAll: (callback) => {
        const query = 'SELECT * FROM Patients';
        db.query(query, callback);
    }
};

module.exports = Patient;
