import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import './Login.css';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password);
        e.PreventDefault();
    }

    return (
        <Box>
            <h2 className="text-center mt-5">Login</h2>
            <Container maxWidth="sm">
                <Box sx={{ m: 4 }}>
                    <form onSubmit={handleLoginSubmit}>
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
                        <button type="submit" className="btn btn-warning primary-button fw-bold mt-4">Login</button>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default Login;