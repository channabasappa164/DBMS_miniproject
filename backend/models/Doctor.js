const db = require('../config/db');

const Doctor = {
    create: (data, callback) => {
        const query = 'INSERT INTO Doctors (Docid, Docname, Sex, DOB, Speciality, Did) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(query, [data.Docid, data.Docname, data.Sex, data.DOB, data.Speciality, data.Did], callback);
    },
    getAll: (callback) => {
        const query = 'SELECT * FROM Doctors';
        db.query(query, callback);
    }
};

module.exports = Doctor;
