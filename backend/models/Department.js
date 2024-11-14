const db = require('../config/db');

const Department = {
    create: (data, callback) => {
        const query = 'INSERT INTO Departments (Did, Dname, Ddesc, Dloc, Hid) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [data.Did, data.Dname, data.Ddesc, data.Dloc, data.Hid], callback);
    },
    getAll: (callback) => {
        const query = 'SELECT * FROM Departments';
        db.query(query, callback);
    }
};

module.exports = Department;
