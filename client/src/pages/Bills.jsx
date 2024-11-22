import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Card, Form, Button, Alert, Table } from 'react-bootstrap';

const Bills = () => {
    const location = useLocation();
    const { service, patientType } = location.state || {};

    const [paymentMethod, setPaymentMethod] = useState('');
    const [bills, setBills] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showReview, setShowReview] = useState(true);

    const user = JSON.parse(localStorage.getItem('user'));
    const pid = user ? user.pid : null;

    const fetchOutpatientBills = async () => {
    try {
        const response = await axios.get(`http://localhost:5005/api/bills/${pid}`);
        console.log('Outpatient Bills Response:', response.data);
        setBills(response.data);
    } catch (err) {
        console.error('Error fetching outpatient bills:', err);
        setError('Error fetching outpatient bills.');
    }
};

const fetchInpatientBills = async () => {
    try {
        const response = await axios.get(`http://localhost:5005/api/inpatient-bills/${pid}`);
        console.log('Inpatient Bills Response:', response.data);
        setBills(response.data);
    } catch (err) {
        console.error('Error fetching inpatient bills:', err);
        setError('Error fetching inpatient bills.');
    }
};

    useEffect(() => {
        if (pid) {
            if (patientType === 'inpatient') {
                fetchInpatientBills();
            } else {
                fetchOutpatientBills();
            }
        }
    }, [pid, patientType]);

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();

        if (!paymentMethod) {
            setError('Please select a payment method.');
            return;
        }

        const billData = {
            Pid: pid,
            Amount: service.Price,
            Method: paymentMethod
        };

        try {
            await axios.post('http://localhost:5005/api/bills', billData);
            if (patientType === 'inpatient') {
                fetchInpatientBills();
            } else {
                fetchOutpatientBills();
            }
            setSuccess('Bill added successfully!');
            setPaymentMethod('');
            setShowReview(false);
        } catch (err) {
            setError('Error processing payment.');
        }
    };

    const handleReviewClick = () => {
        setShowReview(true);
    };

    // Group bills by date
    const groupedBills = bills.reduce((acc, bill) => {
        const date = new Date(bill.Timestamp).toLocaleDateString();
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(bill);
        return acc;
    }, {});

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Invoice</h2>

            {error && <Alert variant="danger" className="my-3">{error}</Alert>}
            {success && <Alert variant="success" className="my-3">{success}</Alert>}

            {service && showReview && (
                <Card className="mb-4 shadow-sm">
                    <Card.Body>
                        <Card.Title>Selected Service Details</Card.Title>
                        <Card.Text><strong>Service Name:</strong> {service.Sname}</Card.Text>
                        <Card.Text><strong>Description:</strong> {service.Description}</Card.Text>
                        <Card.Text><strong>Price:</strong> ${service.Price}</Card.Text>

                        <Form onSubmit={handlePaymentSubmit} className="mt-3">
                            <Form.Group controlId="paymentMethod" className="mb-3">
                                <Form.Label>Payment Method</Form.Label>
                                <Form.Select
                                    value={paymentMethod}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    required
                                >
                                    <option value="">Select Payment Method</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Debit Card">Debit Card</option>
                                    <option value="Credit Card">Credit Card</option>
                                    <option value="EMI">EMI</option>
                                </Form.Select>
                            </Form.Group>
                            <Button variant="success" type="submit">Pay</Button>
                        </Form>
                    </Card.Body>
                </Card>
            )}

            <h4>{patientType === 'inpatient' ? 'Inpatient Bills' : 'Outpatient Bills'}</h4>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>Bill ID</th>
                        <th>Patient ID</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(groupedBills).map((date) => (
                        <React.Fragment key={date}>
                            <tr>
                                <td colSpan="4" className="table-secondary text-center">
                                    <strong>{date}</strong>
                                </td>
                            </tr>
                            {groupedBills[date].map((bill) => (
                                <tr key={bill.Bid}>
                                    <td>{bill.Bid}</td>
                                    <td>{bill.Pid}</td>
                                    <td>${bill.Amount}</td>
                                    <td>{new Date(bill.Timestamp).toLocaleString()}</td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Bills;
