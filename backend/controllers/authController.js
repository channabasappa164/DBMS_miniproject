exports.login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    db.query('SELECT * FROM Patients WHERE Email = ? AND Password = ?', [email, password], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error checking credentials.' });
        }

        if (results.length > 0) {
            const patient = results[0];
            return res.status(200).json({ 
                message: 'Login successful', 
                redirectTo: patient.Type === 'in-patient' ? '/inpatient-dashboard' : '/outpatient-dashboard', 
                username: patient.Name // Make sure this field matches your Patients table
            });
        } else {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }
    });
};
