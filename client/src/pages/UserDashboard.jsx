import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import HospitalList from '../components/HospitalList';

const UserDashboard = () => {
    const [hospitals, setHospitals] = useState([]);
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHospitals = async () => {
            try {
                const response = await axios.get('http://localhost:5005/api/hospitals');
                setHospitals(response.data);
            } catch (error) {
                console.error('Error fetching hospitals:', error);
            }
        };

        const fetchServices = async () => {
            try {
                const response = await axios.get('http://localhost:5005/api/services');
                setServices(response.data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchHospitals();
        fetchServices();
    }, []);

    const handleExploreServices = () => {
        navigate('/services');
    };

    return (
        <Container className="mt-5">
            <h2 className="text-primary mb-4">User Dashboard</h2>

            <Card className="mb-4 p-4 shadow-sm">
                <Card.Body>
                    <Card.Title className="text-secondary">Hospitals</Card.Title>
                    <HospitalList hospitals={hospitals} />
                </Card.Body>
            </Card>

            <h3 className="text-secondary mb-3">Available Services</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
                {services.length > 0 ? (
                    services.slice(0, 3).map(service => (
                        <Col key={service.Sid}>
                            <Card className="h-100 shadow-sm">
                                <Card.Body>
                                    <Card.Title>{service.Sname}</Card.Title>
                                    <Card.Text>Price: ${service.Price}</Card.Text>
                                    <Button 
                                        variant="primary" 
                                        onClick={handleExploreServices}
                                        className="mt-3 w-100"
                                    >
                                        Explore Services
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col>
                        <Card className="h-100 shadow-sm">
                            <Card.Body>
                                <Card.Text>No services available.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>

            {services.length > 3 && (
                <div className="text-center mt-4">
                    <Button variant="secondary" onClick={handleExploreServices}>
                        View All Services
                    </Button>
                </div>
            )}
        </Container>
    );
};

export default UserDashboard;
