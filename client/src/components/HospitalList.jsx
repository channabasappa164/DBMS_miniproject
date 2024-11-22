import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge } from 'react-bootstrap';

const HospitalList = ({ hospitals }) => {
    return (
        <div className="container mt-4">
            <h3 className="text-primary mb-4">Hospitals</h3>
            <div className="row">
                {hospitals.map(hospital => (
                    <div key={hospital.Hid} className="col-md-6 col-lg-4 mb-4">
                        <Card className="shadow-sm border-0 h-100">
                            <Card.Body>
                                <Card.Title as={Link} to={`/hospitals/${hospital.Hid}`} className="text-decoration-none text-dark">
                                    {hospital.Hname}
                                </Card.Title>
                                <Card.Text className="mb-2">
                                    <strong>Location:</strong> {hospital.Hloc}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Specialties:</strong>
                                    {hospital.Speciality.split(',').map((specialty, index) => (
                                        <Badge key={index} bg="info" className="me-1">
                                            {specialty.trim()}
                                        </Badge>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HospitalList;
