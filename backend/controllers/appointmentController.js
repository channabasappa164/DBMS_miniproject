const db = require('../config/db');

// Book an appointment
exports.bookAppointment = (req, res) => {
    const { patientId, doctorId, serviceId, date } = req.body;
    const query = 'INSERT INTO Appointments (patientId, doctorId, serviceId, date) VALUES (?, ?, ?, ?)';
    db.query(query, [patientId, doctorId, serviceId, date], (err, results) => {
        if (err) return res.status(500).json({ message: 'Error booking appointment.' });
        res.status(201).json({ message: 'Appointment booked successfully!' });
    });
};
