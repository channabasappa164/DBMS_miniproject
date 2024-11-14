const db = require('../config/db');

const MedicalRecord = {
    create: (data, callback) => {
        const query = 'INSERT INTO Medical_Records (Record_No, Pid, Eid) VALUES (?, ?, ?)';
        db.query(query, [data.Record_No, data.Pid, data.Eid], callback);
    },
    getAll: (callback) => {
        const query = 'SELECT * FROM Medical_Records';
        db.query(query, callback);
    }
};

module.exports = MedicalRecord;
