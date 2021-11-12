import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://intense-cliffs-24776.herokuapp.com/users/admin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Admin make Successfully!');
                }
            })
        e.preventDefault();
    }

    return (
        <Box>
            <h2 className="text-center mt-5">MAKE AN ADMIN</h2>
            <Container maxWidth="sm">
                <Box sx={{ m: 4 }}>
                    <form onSubmit={handleAdminSubmit}>
                        <TextField
                            sx={{ width: '80%', mt: 2 }}
                            variant="outlined"
                            label="Email"
                            type="email"
                            onBlur={handleOnBlur}
                        />
                        <br />
                        <button type="submit" className="btn btn-warning primary-button fw-bold mt-4">Make Admin</button>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default MakeAdmin;