import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaSignInAlt, FaUser, FaUserShield, FaBriefcaseMedical, FaFileInvoice, FaFolderOpen } from 'react-icons/fa';

const Header = () => {
    const username = localStorage.getItem('username'); // Get username from local storage

    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="px-4 py-2 shadow">
            <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">HOSP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/" className="d-flex align-items-center">
                        <FaHome className="me-1" /> Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/login" className="d-flex align-items-center">
                        <FaSignInAlt className="me-1" /> Login
                    </Nav.Link>
                    <Nav.Link as={Link} to="/user" className="d-flex align-items-center">
                        <FaUser className="me-1" /> User Dashboard
                    </Nav.Link>
                    <Nav.Link as={Link} to="/admin" className="d-flex align-items-center">
                        <FaUserShield className="me-1" /> Admin Dashboard
                    </Nav.Link>
                    <Nav.Link as={Link} to="/services" className="d-flex align-items-center">
                        <FaBriefcaseMedical className="me-1" /> Services
                    </Nav.Link>
                    <Nav.Link as={Link} to="/bills" className="d-flex align-items-center">
                        <FaFileInvoice className="me-1" /> Bills
                    </Nav.Link>
                    <Nav.Link as={Link} to="/medical-records" className="d-flex align-items-center">
                        <FaFolderOpen className="me-1" /> Medical Records
                    </Nav.Link>
                    {username && (
                        <span className="navbar-text ms-3 text-white px-3 py-1 rounded bg-secondary">
                            Welcome, {username}!
                        </span>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
