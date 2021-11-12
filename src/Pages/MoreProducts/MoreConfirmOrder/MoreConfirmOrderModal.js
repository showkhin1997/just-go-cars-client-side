import React, { useState } from 'react';
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


const MoreConfirmOrderModal = ({ open, handleClose, moreProduct, setOrderSuccess }) => {
    const { productName, price, manufacturer } = moreProduct;
    const { user } = useAuth();
    const initialInfo = { buyerName: user.displayName, email: user.email, phone: '', address: '' };
    const [purchesInfo, setPurchesInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchesInfo };
        newInfo[field] = value;
        setPurchesInfo(newInfo);
    }

    const handleOnConfirmOrder = e => {
        const confirmOrder = {
            ...purchesInfo,
            productName: productName,
            brand: manufacturer,
            price: price,
        }
        fetch('https://intense-cliffs-24776.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(confirmOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderSuccess(true)
                    handleClose();
                }
            })
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
                        defaultValue={productName}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        disabled
                        label="Brand"
                        id="outlined-size-small"
                        defaultValue={manufacturer}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        disabled
                        label="Price$"
                        id="outlined-size-small"
                        defaultValue={price}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        label="Your Name"
                        id="outlined-size-small"
                        defaultValue={user?.displayName}
                        name="buyerName"
                        onBlur={handleOnBlur}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        label="Email"
                        id="outlined-size-small"
                        defaultValue={user?.email}
                        name="email"
                        onBlur={handleOnBlur}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        label="Phone"
                        id="outlined-size-small"
                        defaultValue=""
                        name="phone"
                        onBlur={handleOnBlur}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        label="Address"
                        id="outlined-size-small"
                        defaultValue=""
                        name="address"
                        onBlur={handleOnBlur}
                        size="small"
                    />
                    <Button type="submit" className="btn btn-warning primary-button fw-bold m-2">PURCHES</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default MoreConfirmOrderModal;