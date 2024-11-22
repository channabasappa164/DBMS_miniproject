import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Accordion, Card, Button, Alert, InputGroup, FormControl } from 'react-bootstrap';

const Services = () => {
    const [hospitals, setHospitals] = useState([]);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get('http://localhost:5005/api/hospitals');
                const hospitalData = response.data;

                const servicesPromises = hospitalData.map(async (hospital) => {
                    const servicesResponse = await axios.get(`http://localhost:5005/api/services?hid=${hospital.Hid}`);
                    return {
                        ...hospital,
                        services: servicesResponse.data,
                    };
                });

                const hospitalsWithServices = await Promise.all(servicesPromises);
                setHospitals(hospitalsWithServices);
            } catch (err) {
                setError('Error fetching services.');
            }
        };

        fetchServices();
    }, []);

    const handleBookService = (hospitalId, service) => {
        navigate('/bills', {
            state: {
                hospitalId,
                service,
                patientType: 'outpatient',
            }
        });
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filterServices = (services) => {
        return services.filter(service => 
            service.Sname.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.Description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-primary fw-bold">Available Services</h2>
            {error && <Alert variant="danger" className="my-3">{error}</Alert>}
            {hospitals.length === 0 ? (
                <p className="text-muted">No services available.</p>
            ) : (
                <Accordion>
                    {hospitals.map((hospital, index) => (
                        <Accordion.Item eventKey={index.toString()} key={hospital.Hid}>
                            <Accordion.Header>
                                <div>
                                    <h5 className="text-secondary mb-0">{hospital.Hname}</h5>
                                    <small className="text-muted">Location: {hospital.Hloc}</small>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Search services..."
                                        onChange={handleSearchChange}
                                    />
                                </InputGroup>
                                {filterServices(hospital.services).length === 0 ? (
                                    <p className="text-muted">No matching services available.</p>
                                ) : (
                                    filterServices(hospital.services).map(service => (
                                        <Card key={service.Sid} className="mb-3">
                                            <Card.Body>
                                                <Card.Title className="mb-1">{service.Sname}</Card.Title>
                                                <Card.Text className="text-muted">{service.Description}</Card.Text>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <p className="mb-1"><strong>Location:</strong> {service.Location}</p>
                                                        <p className="mb-1"><strong>Price:</strong> ${service.Price}</p>
                                                    </div>
                                                    <Button 
                                                        variant="primary" 
                                                        onClick={() => handleBookService(hospital.Hid, service)}
                                                    >
                                                        Book Now
                                                    </Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    ))
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            )}
        </div>
    );
};

export default Services;
