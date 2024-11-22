import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Home = () => {
    const location = useLocation();
    const user = location.state?.user;

    return (
        <div className="container mt-5">
            <Card className="shadow-lg p-4 text-center">
                <h1 className="mb-4 text-primary fw-bold">Welcome to the HOSP-Healthcare Operations and services Platform</h1>
                {user && <h2 className="text-secondary">Hello, {user}! We're here to serve you.</h2>}
                <p className="mt-3 fs-5">
                    Our platform is designed to streamline your healthcare experience. Whether it's managing
                    appointments, keeping track of your medical records, or exploring available services, we've
                    got you covered every step of the way.
                </p>
                <hr className="my-4" />
                <h3 className="mb-3 text-primary">What You Can Do Here:</h3>
                <ul className="list-group list-group-flush text-start">
                    <li className="list-group-item">
                        <strong>Appointment Booking:</strong> Schedule visits to the hospital effortlessly at your convenience.
                    </li>
                    <li className="list-group-item">
                        <strong>Medical Record Management:</strong> Securely store and access your medical history and records.
                    </li>
                    <li className="list-group-item">
                        <strong>Service Exploration:</strong> Discover a variety of hospital services tailored to your needs.
                    </li>
                </ul>
                <div className="d-flex justify-content-center mt-4">
                    <Button variant="primary" className="me-3" href="/services">
                        Explore Services
                    </Button>
                    <Button variant="secondary" href="/login">
                        Get Started
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default Home;
