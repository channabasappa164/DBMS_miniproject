const db = require('../config/db');

const Employee = {
    create: (data, callback) => {
        const query = 'INSERT INTO Employees (Eid, Ename, Address, Phone_No, Sex) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [data.Eid, data.Ename, data.Address, data.Phone_No, data.Sex], callback);
    },
    getAll: (callback) => {
        const query = 'SELECT * FROM Employees';
        db.query(query, callback);
    }
};

module.exports = Employee;
