const db = require('../config/db');

const Bill = {
    create: (data, callback) => {
        const query = 'INSERT INTO Bills (Bid, Pid, Amount, Method, Timestamp) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [data.Bid, data.Pid, data.Amount, data.Method, data.Timestamp], callback);
    },
    getAll: (callback) => {
        const query = 'SELECT * FROM Bills';
        db.query(query, callback);
    }
};

module.exports = Bill;
