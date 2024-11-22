import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Card } from 'react-bootstrap';

const MedicalRecordsForm = () => {
    const [formData, setFormData] = useState({
        recordNo: '',
        pid: '',
        eid: '',
        report: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5005/api/medical-records', formData);
            setSuccess('Medical record added/updated successfully!');
            setFormData({
                recordNo: '',
                pid: '',
                eid: '',
                report: ''
            });
        } catch (err) {
            setError('An error occurred while saving the medical record.');
        }
    };

    return (
        <div className="container mt-5">
            <Card className="p-4 shadow-sm">
                <Card.Body>
                    <h3 className="mb-3">Add/Update Medical Record</h3>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success">{success}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="recordNo" className="mb-3">
                            <Form.Label>Record No</Form.Label>
                            <Form.Control type="text" name="recordNo" value={formData.recordNo} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="pid" className="mb-3">
                            <Form.Label>Patient ID</Form.Label>
                            <Form.Control type="text" name="pid" value={formData.pid} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="eid" className="mb-3">
                            <Form.Label>Employee ID</Form.Label>
                            <Form.Control type="text" name="eid" value={formData.eid} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="report" className="mb-3">
                            <Form.Label>Report</Form.Label>
                            <Form.Control as="textarea" name="report" value={formData.report} onChange={handleChange} required />
                        </Form.Group>
                        <Button type="submit" variant="primary" className="w-100">Save Record</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MedicalRecordsForm;
