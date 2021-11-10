import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { registerUser } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    const handleRegisterSubmit = e => {
        if (registerData.password !== registerData.password2) {
            alert('password did not matched');
            return;
        }
        registerUser(registerData.email, registerData.password, registerData.name)
        e.preventDefault();
    }

    return (
        <Box>
            <h2 className="text-center mt-5">Register</h2>
            <Container maxWidth="sm">
                <Box sx={{ m: 4 }}>
                    <form onSubmit={handleRegisterSubmit}>
                        <TextField
                            sx={{ width: '80%', mt: 2 }}
                            id="outlined-basic"
                            variant="outlined"
                            label="Name"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                        />
                        <br />
                        <TextField
                            sx={{ width: '80%', mt: 2 }}
                            id="outlined-basic"
                            variant="outlined"
                            label="Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                        />
                        <br />
                        <TextField
                            sx={{ width: '80%', mt: 2 }}
                            id="outlined-basic"
                            variant="outlined"
                            label="Password"
                            name="password"
                            type="password"
                            onBlur={handleOnBlur}
                        />
                        <br />
                        <TextField
                            sx={{ width: '80%', mt: 2 }}
                            id="outlined-basic"
                            variant="outlined"
                            label="Re-type Password"
                            name="password2"
                            type="password"
                            onBlur={handleOnBlur}
                        />
                        <br />
                        <button type="submit" className="btn btn-warning primary-button fw-bold mt-4">Register</button>
                        <br /> <br />
                        <Link to="/login">
                            <Button variant="link">Already Have Account? Please Login</Button>
                        </Link>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default Register;