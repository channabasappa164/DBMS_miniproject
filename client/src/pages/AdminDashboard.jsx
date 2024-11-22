import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Card, Button, Accordion, Form, Alert } from 'react-bootstrap';

const AdminDashboard = () => {
    const [formData, setFormData] = useState({
        pid: '',
        pname: '',
        bloodType: '',
        dob: '',
        sex: '',
        phoneNo: '',
        email: '',
        emergencyContact: '',
        insuranceProvider: '',
        password: '',
        address: '',
        patientType: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dobDate = new Date(formData.dob);
        if (isNaN(dobDate.getTime())) {
            setError('Please enter a valid date of birth in YYYY-MM-DD format.');
            return;
        }

        const formattedDob = dobDate.toISOString().split('T')[0];
        const dataToSubmit = { ...formData, dob: formattedDob };

        try {
            await axios.post('http://localhost:5005/api/admin/add-user', dataToSubmit);
            setSuccess('User added successfully!');
            setFormData({
                pid: '',
                pname: '',
                bloodType: '',
                dob: '',
                sex: '',
                phoneNo: '',
                email: '',
                emergencyContact: '',
                insuranceProvider: '',
                password: '',
                address: '',
                patientType: ''
            });
        } catch (err) {
            setError(err.response ? err.response.data.message : 'An error occurred');
        }
    };

    const handleAddMedicalRecord = () => {
        navigate('/add-medical-record'); // Navigate to Medical Record Form
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Admin Dashboard</h2>
            <p>Manage hospitals, services, and medical records.</p>

            <div className="mb-3">
                <Link to="/update-user" className="btn btn-secondary me-2">Update User</Link>
                <Button variant="info" onClick={handleAddMedicalRecord}>Add Medical Record</Button>
            </div>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Add New User</Accordion.Header>
                    <Accordion.Body>
                        <Card className="p-4">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="pid">
                                    <Form.Label>Patient ID</Form.Label>
                                    <Form.Control type="text" name="pid" value={formData.pid} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="pname">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="pname" value={formData.pname} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="bloodType">
                                    <Form.Label>Blood Type</Form.Label>
                                    <Form.Control type="text" name="bloodType" value={formData.bloodType} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="dob">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="sex">
                                    <Form.Label>Sex</Form.Label>
                                    <Form.Select name="sex" value={formData.sex} onChange={handleChange} required>
                                        <option value="">Select</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                        <option value="O">Other</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="phoneNo">
                                    <Form.Label>Phone No</Form.Label>
                                    <Form.Control type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="emergencyContact">
                                    <Form.Label>Emergency Contact</Form.Label>
                                    <Form.Control type="text" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="insuranceProvider">
                                    <Form.Label>Insurance Provider</Form.Label>
                                    <Form.Control type="text" name="insuranceProvider" value={formData.insuranceProvider} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="patientType">
                                    <Form.Label>Patient Type</Form.Label>
                                    <Form.Select name="patientType" value={formData.patientType} onChange={handleChange} required>
                                        <option value="">Select</option>
                                        <option value="in-patient">In-Patient</option>
                                        <option value="out-patient">Out-Patient</option>
                                    </Form.Select>
                                </Form.Group>
                                {error && <Alert variant="danger">{error}</Alert>}
                                {success && <Alert variant="success">{success}</Alert>}
                                <Button variant="primary" type="submit" className="w-100 mt-3">Add User</Button>
                            </Form>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default AdminDashboard;
