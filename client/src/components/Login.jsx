import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';

const Login = () => {
    const [selectedUser, setSelectedUser] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const userData = {
            name: selectedUser,
            pid: selectedUser === 'Akshaj' ? 4 : 7
        };
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/', { state: { user: selectedUser } });
    };

    return (
        <div className="container d-flex justify-content-center mt-5">
            <Card className="p-4 shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="text-center mb-4">Select User</h2>
                <Form>
                    <Form.Check
                        type="radio"
                        id="radio-akshaj"
                        label="Akshaj"
                        name="user"
                        value="Akshaj"
                        checked={selectedUser === 'Akshaj'}
                        onChange={(e) => setSelectedUser(e.target.value)}
                        className="mb-2"
                    />
                    <Form.Check
                        type="radio"
                        id="radio-channabasappa"
                        label="Channabasappa"
                        name="user"
                        value="Channabasappa"
                        checked={selectedUser === 'Channabasappa'}
                        onChange={(e) => setSelectedUser(e.target.value)}
                        className="mb-3"
                    />
                    <Button 
                        variant="primary" 
                        className="w-100"
                        onClick={handleLogin}
                        disabled={!selectedUser}
                    >
                        Login
                    </Button>
                </Form>
            </Card>
        </div>
    );
};

export default Login;
