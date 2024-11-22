import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Alert, Table } from 'react-bootstrap';

const MedicalRecords = () => {
    const [records, setRecords] = useState([]);
    const [error, setError] = useState('');
    
    const user = JSON.parse(localStorage.getItem('user'));
    const pid = user ? user.pid : null;

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const response = await axios.get('http://localhost:5005/api/medical-records');
                const allRecords = response.data;

                const filteredRecords = allRecords.filter(record => record.Pid === pid);
                setRecords(filteredRecords);
            } catch (err) {
                setError('Error fetching medical records.');
            }
        };

        fetchRecords();
    }, [pid]);

    return (
        <div className="container mt-5">
            <Card className="shadow-lg p-4">
                <Card.Body>
                    <Card.Title className="text-primary fw-bold mb-4">Medical Records</Card.Title>
                    {error && <Alert variant="danger" className="my-3">{error}</Alert>}
                    {records.length === 0 ? (
                        <p className="text-muted">No medical records available for this user.</p>
                    ) : (
                        <Table striped bordered hover className="mt-3">
                            <thead>
                                <tr>
                                    <th>Record No</th>
                                    <th>Patient ID</th>
                                    <th>Employee ID</th>
                                    <th>Report</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.map(record => (
                                    <tr key={record.Record_No}>
                                        <td>{record.Record_No}</td>
                                        <td>{record.Pid}</td>
                                        <td>{record.Eid}</td>
                                        <td>{record.Report}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};

export default MedicalRecords;
