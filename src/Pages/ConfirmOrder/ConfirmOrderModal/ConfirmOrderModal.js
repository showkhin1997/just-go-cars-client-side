import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@restart/ui/esm/Button';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ConfirmOrderModal = ({ open, handleClose, product }) => {
    const { user } = useAuth();

    const handleOnConfirmOrder = e => {
        alert('Order Processing for Delivary')
        e.preventDefault()
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                    Confirm Order
                </Typography>
                <form onSubmit={handleOnConfirmOrder}>
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        disabled
                        label="Car Name"
                        id="outlined-size-small"
                        defaultValue={product?.productName}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        disabled
                        label="Price$"
                        id="outlined-size-small"
                        defaultValue={product?.price}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        label="Email"
                        id="outlined-size-small"
                        defaultValue={user?.email}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        label="Your Name"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        label="Phone"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        label="Address"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                    />
                    <Button type="submit" className="btn btn-warning primary-button fw-bold m-2">Confirm Order</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default ConfirmOrderModal;