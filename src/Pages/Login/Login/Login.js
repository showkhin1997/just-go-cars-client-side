import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CircularProgress, Container } from '@mui/material';
import './Login.css';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, isLoading, user, authError, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Box>
            <Navigation></Navigation>
            <h2 className="text-center mt-5">Login</h2>
            <Container maxWidth="sm">
                <Box sx={{ m: 4 }}>
                    {user?.email && <Alert severity="success">Login Successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    {!isLoading &&
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
                            <button onClick={handleGoogleSignIn} type="button" className="btn btn-primary fw-bold mt-4 ms-2">Google Sign In</button>
                            <br />
                            <Link to="/register">
                                <button type="button" className="btn btn-link">New User? Please Register</button>
                            </Link>
                        </form>
                    }
                    {isLoading && <CircularProgress />}
                </Box>
            </Container>
        </Box>
    );
};

export default Login;