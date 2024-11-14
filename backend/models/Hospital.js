const db = require('../config/db');

const Hospital = {
    create: (data, callback) => {
        const query = 'INSERT INTO Hospitals (Hid, Hname, Hloc, Speciality, Contact) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [data.Hid, data.Hname, data.Hloc, data.Speciality, data.Contact], callback);
    },
    getAll: (callback) => {
        const query = 'SELECT * FROM Hospitals';
        db.query(query, callback);
    }
};

module.exports = Hospital;
