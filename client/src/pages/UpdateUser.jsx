import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Accordion, Card, Alert, Button, Form, ListGroup, InputGroup } from 'react-bootstrap';

const UpdateUser = () => {
    const [patientId, setPatientId] = useState('');
    const [rooms, setRooms] = useState([]);
    const [services, setServices] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState('');
    const [selectedServices, setSelectedServices] = useState([]);
    const [employeeId, setEmployeeId] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [occupiedRooms, setOccupiedRooms] = useState([]);
    const [showOccupiedRooms, setShowOccupiedRooms] = useState(false);

    useEffect(() => {
        const fetchRoomsAndServices = async () => {
            try {
                const roomResponse = await axios.get('http://localhost:5005/api/rooms/available');
                const serviceResponse = await axios.get('http://localhost:5005/api/services');
                setRooms(roomResponse.data);
                setServices(serviceResponse.data);
            } catch (error) {
                setError('Error fetching rooms or services.');
                console.error('Error fetching rooms or services:', error);
            }
        };
        fetchRoomsAndServices();
    }, []);

    const handleAssignRoom = async (e) => {
        e.preventDefault();

        if (!selectedRoom || selectedServices.length === 0 || !employeeId || !patientId) {
            setError('Please provide all the required inputs.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5005/api/inpatient/assign-room', {
                patientId,
                roomId: selectedRoom,
                hospitalName: "City Hospital",
                servicesUsed: selectedServices,
                employeeId,
            });

            setSuccess(response.data.message);
            setError('');
            setSelectedRoom('');
            setSelectedServices([]);
            setPatientId('');
            setEmployeeId('');
        } catch (err) {
            console.error('Error assigning room and services:', err);
            setError('Error assigning room and services. Please try again.');
            setSuccess('');
        }
    };

    const handleDischargePatient = async () => {
        if (!patientId) {
            setError('Please enter the patient ID to discharge.');
            return;
        }

        try {
            const response = await axios.get(`http://localhost:5005/api/inpatient/occupied-rooms/${patientId}`);
            setOccupiedRooms(response.data);
            setShowOccupiedRooms(true);
            setError('');
        } catch (err) {
            console.error('Error fetching occupied rooms:', err);
            setError('Error fetching occupied rooms. Please try again.');
            setSuccess('');
        }
    };

    const handleUnassignRoom = async (roomId) => {
        try {
            const response = await axios.delete(`http://localhost:5005/api/inpatient/discharge-room/${roomId}/${patientId}`);
            setSuccess(response.data.message);
            setError('');
            const updatedRooms = occupiedRooms.filter(room => room.Rid !== roomId);
            setOccupiedRooms(updatedRooms);
            if (updatedRooms.length === 0) {
                setShowOccupiedRooms(false);
            }
        } catch (err) {
            console.error('Error unassigning room:', err);
            setError('Error unassigning room. Please try again.');
            setSuccess('');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-primary fw-bold">Update User</h2>
            <p className="text-muted">Assign or discharge a patient from a room and assign services.</p>

            {error && <Alert variant="danger" className="my-3">{error}</Alert>}
            {success && <Alert variant="success" className="my-3">{success}</Alert>}

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Assign Room and Services</Accordion.Header>
                    <Accordion.Body>
                        <Form onSubmit={handleAssignRoom}>
                            <Form.Group controlId="patientId" className="mb-3">
                                <Form.Label>Enter Patient ID</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={patientId}
                                    onChange={(e) => setPatientId(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="roomSelect" className="mb-3">
                                <Form.Label>Select Room</Form.Label>
                                <Form.Select
                                    value={selectedRoom}
                                    onChange={(e) => setSelectedRoom(e.target.value)}
                                    required
                                >
                                    <option value="">Select Room</option>
                                    {rooms.map(room => (
                                        <option key={room.Rid} value={room.Rid}>
                                            {room.Type} - {room.Location} - ${room.Price} ({room.Availability ? 'Available' : 'Not Available'})
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId="serviceSelect" className="mb-3">
                                <Form.Label>Select Services</Form.Label>
                                <InputGroup>
                                    <Form.Select onChange={(e) => {
                                        const service = services.find(s => s.Sid === parseInt(e.target.value));
                                        if (service && !selectedServices.includes(service)) {
                                            setSelectedServices([...selectedServices, service]);
                                        }
                                    }}>
                                        <option value="">Select Service</option>
                                        {services.map(service => (
                                            <option key={service.Sid} value={service.Sid}>
                                                {service.Sname} - ${service.Price}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </InputGroup>
                            </Form.Group>

                            <h5 className="mt-3">Selected Services:</h5>
                            <ListGroup className="mb-3">
                                {selectedServices.map(service => (
                                    <ListGroup.Item key={service.Sid} className="d-flex justify-content-between align-items-center">
                                        {service.Sname} - ${service.Price}
                                        <Button variant="outline-danger" size="sm" onClick={() => {
                                            setSelectedServices(selectedServices.filter(s => s.Sid !== service.Sid));
                                        }}>
                                            Remove
                                        </Button>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>

                            <Form.Group controlId="employeeId" className="mb-3">
                                <Form.Label>Enter Employee ID</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={employeeId}
                                    onChange={(e) => setEmployeeId(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Button type="submit" variant="primary">Assign Room and Services</Button>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Discharge Patient</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group controlId="dischargePatientId" className="mb-3">
                            <Form.Label>Enter Patient ID to Discharge</Form.Label>
                            <Form.Control
                                type="text"
                                value={patientId}
                                onChange={(e) => setPatientId(e.target.value)}
                            />
                        </Form.Group>
                        <Button onClick={handleDischargePatient} variant="danger">Discharge Patient</Button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {showOccupiedRooms && (
                <Card className="mt-4 p-4 shadow-sm">
                    <Card.Title>Occupied Rooms for Patient ID: {patientId}</Card.Title>
                    <ListGroup>
                        {occupiedRooms.map(room => (
                            <ListGroup.Item key={room.Rid} className="d-flex justify-content-between align-items-center">
                                <span>{room.Type} - {room.Location} - ${room.Price}</span>
                                <Button
                                    onClick={() => handleUnassignRoom(room.Rid)}
                                    variant="warning" size="sm"
                                >
                                    Unassign
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card>
            )}
        </div>
    );
};

export default UpdateUser;
