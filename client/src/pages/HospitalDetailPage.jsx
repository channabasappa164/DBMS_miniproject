import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, ListGroup, Badge } from 'react-bootstrap';

const HospitalDetailPage = () => {
    const { hospitalId } = useParams();
    const [hospital, setHospital] = useState(null);
    const [doctors, setDoctors] = useState([]);
    const [services, setServices] = useState([]);
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const fetchHospitalDetails = async () => {
            try {
                const hospitalResponse = await axios.get(`http://localhost:5005/api/hospitals/${hospitalId}`);
                setHospital(hospitalResponse.data);

                const doctorsResponse = await axios.get(`http://localhost:5005/api/hospitals/${hospitalId}/doctors`);
                setDoctors(doctorsResponse.data);

                const servicesResponse = await axios.get(`http://localhost:5005/api/hospitals/${hospitalId}/services`);
                setServices(servicesResponse.data);

                const departmentsResponse = await axios.get(`http://localhost:5005/api/hospitals/${hospitalId}/departments`);
                setDepartments(departmentsResponse.data);
            } catch (error) {
                console.error('Error fetching hospital details:', error);
            }
        };

        fetchHospitalDetails();
    }, [hospitalId]);

    return (
        <div className="container mt-5">
            {hospital && (
                <Card className="p-4 shadow-lg">
                    <Card.Body>
                        <Card.Title className="text-primary fw-bold fs-3 mb-3">{hospital.Hname}</Card.Title>
                        <Card.Text><strong>Location:</strong> {hospital.Hloc}</Card.Text>
                        <Card.Text><strong>Specialty:</strong> {hospital.Speciality}</Card.Text>
                    </Card.Body>
                </Card>
            )}

            <div className="mt-5">
                <h4 className="text-primary">Doctors</h4>
                <ListGroup className="mb-4">
                    {doctors.length > 0 ? (
                        doctors.map(doctor => (
                            <ListGroup.Item key={doctor.Docid} className="d-flex justify-content-between align-items-center">
                                <span>{doctor.Docname}</span>
                                <Badge bg="info">{doctor.Speciality}</Badge>
                            </ListGroup.Item>
                        ))
                    ) : (
                        <ListGroup.Item>No doctors available.</ListGroup.Item>
                    )}
                </ListGroup>

                <h4 className="text-primary">Services</h4>
                <ListGroup className="mb-4">
                    {services.length > 0 ? (
                        services.map(service => (
                            <ListGroup.Item key={service.Sid} className="d-flex justify-content-between align-items-center">
                                <span>{service.Sname}</span>
                                <Badge bg="success">${service.Price}</Badge>
                            </ListGroup.Item>
                        ))
                    ) : (
                        <ListGroup.Item>No services available.</ListGroup.Item>
                    )}
                </ListGroup>

                <h4 className="text-primary">Departments</h4>
                <ListGroup>
                    {departments.length > 0 ? (
                        departments.map(department => (
                            <ListGroup.Item key={department.Did}>{department.Dname}</ListGroup.Item>
                        ))
                    ) : (
                        <ListGroup.Item>No departments available.</ListGroup.Item>
                    )}
                </ListGroup>
            </div>
        </div>
    );
};

export default HospitalDetailPage;
