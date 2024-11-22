import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard'; // Ensure this is imported
import Header from './components/Header';
import Services from './pages/Services';
import Bills from './pages/Bills';
import HospitalDetailPage from './pages/HospitalDetailPage';
import Login from './components/Login';
import InPatientFacilities from './pages/InPatientFacilities';
import 'bootstrap/dist/css/bootstrap.min.css';
import MedicalRecords from './pages/MedicalRecords'; // Import the Medical Records component
import UpdateUser from './pages/UpdateUser'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import MedicalRecordsForm from './pages/MedicalRecordsForm'; // Import the MedicalRecordsForm component




function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user" element={<UserDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} /> {/* Admin dashboard route */}
                <Route path="/services" element={<Services />} />
                <Route path="/bills" element={<Bills />} />
                <Route path="/hospitals/:hospitalId" element={<HospitalDetailPage />} />
                <Route path="/inpatient-facilities" element={<InPatientFacilities />} />
                <Route path="/medical-records" element={<MedicalRecords />} /> {/* New route for Medical Records */}
                <Route path="/update-user" element={<UpdateUser />} /> {/* Use 'element' instead of 'component' */}
                <Route path="/add-medical-record" element={<MedicalRecordsForm />} /> {/* Add route for MedicalRecordsForm */}

            </Routes>
        </Router>
    );
}

export default App;
