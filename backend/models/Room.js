const db = require('../config/db');

const Room = {
    create: (data, callback) => {
        const query = 'INSERT INTO Rooms (Rid, Type, Location, Capacity, Availability, Hid) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(query, [data.Rid, data.Type, data.Location, data.Capacity, data.Availability, data.Hid], callback);
    },
    getAll: (callback) => {
        const query = 'SELECT * FROM Rooms';
        db.query(query, callback);
    }
};

module.exports = Room;
