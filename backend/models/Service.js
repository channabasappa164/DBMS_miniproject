const db = require('../config/db');

const Service = {
    create: (data, callback) => {
        const query = 'INSERT INTO Services (Sid, Sname, Description, Location, Hid) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [data.Sid, data.Sname, data.Description, data.Location, data.Hid], callback);
    },
    getAll: (callback) => {
        const query = 'SELECT * FROM Services';
        db.query(query, callback);
    }
};

module.exports = Service;
