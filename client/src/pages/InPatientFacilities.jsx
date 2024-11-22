import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Form, Button, Alert, ListGroup, Badge } from 'react-bootstrap';

const InPatientFacilities = () => {
    const location = useLocation();
    const { hospitalName, servicesUsed } = location.state || {};

    const [facilities, setFacilities] = useState([]);
    const [facilityInput, setFacilityInput] = useState('');
    const [selectedService, setSelectedService] = useState(null);

    const getServiceByName = (serviceName) => {
        return servicesUsed.find(service => service.Sname.toLowerCase().includes(serviceName.toLowerCase()));
    };

    const handleAddFacility = () => {
        if (selectedService) {
            setFacilities([...facilities, selectedService]);
            setFacilityInput('');
            setSelectedService(null);
        }
    };

    const handleFacilityInputChange = (e) => {
        const input = e.target.value;
        setFacilityInput(input);
        if (input) {
            const service = getServiceByName(input);
            setSelectedService(service);
        } else {
            setSelectedService(null);
        }
    };

    return (
        <div className="container mt-5">
            <Card className="p-4 shadow-lg">
                <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bold">{hospitalName} - In-Patient Facilities</Card.Title>
                    <Card.Subtitle className="mb-3">Services Available:</Card.Subtitle>
                    <ListGroup className="mb-4">
                        {servicesUsed.map(service => (
                            <ListGroup.Item key={service.Sid} className="d-flex justify-content-between align-items-center">
                                {service.Sname}
                                <Badge bg="primary" pill>${service.Price}</Badge>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                    <Form.Group controlId="facility" className="mb-3">
                        <Form.Label>Add Facility Used</Form.Label>
                        <Form.Control
                            type="text"
                            value={facilityInput}
                            onChange={handleFacilityInputChange}
                            placeholder="Type to search for a service..."
                        />
                        {selectedService && (
                            <Alert variant="info" className="mt-2">
                                <strong>Selected Service:</strong> {selectedService.Sname} - ${selectedService.Price}
                            </Alert>
                        )}
                    </Form.Group>

                    <Button variant="secondary" onClick={handleAddFacility} disabled={!selectedService}>
                        Add Facility
                    </Button>
                </Card.Body>
            </Card>

            {facilities.length > 0 && (
                <Card className="mt-4 p-4 shadow">
                    <Card.Title className="text-primary">Facilities Used</Card.Title>
                    <ListGroup>
                        {facilities.map((fac, index) => (
                            <ListGroup.Item key={index}>
                                {fac.Sname} - ${fac.Price}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card>
            )}
        </div>
    );
};

export default InPatientFacilities;
