import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Alert from '@mui/material/Alert';
import { useParams } from 'react-router';
import Navigation from '../../Shared/Navigation/Navigation';
import ConfirmOrderModal from '../ConfirmOrderModal/ConfirmOrderModal';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const ConfirmOrder = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [orderSuccess, setOrderSuccess] = useState(false);

    useEffect(() => {
        const url = `https://intense-cliffs-24776.herokuapp.com/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <>
            <div>
                <Navigation></Navigation>
                {orderSuccess && <Alert severity="success" sx={{ m: 3 }}>Purchess Successfully!</Alert>}
                <div className="container mt-5 p-2">
                    <Card style={{ width: '28rem' }} className="border-0">
                        <Card.Img variant="top" src={product?.img} />
                        <Card.Body>
                            <Card.Title>{product?.productName}</Card.Title>
                            <Card.Text>
                                Manufacturer: {product?.manufacturer}
                            </Card.Text>
                            <Card.Text>
                                {product?.description}
                            </Card.Text>
                            <Card.Text>
                                <small>Price: </small>${product?.price}
                            </Card.Text>
                            <Button onClick={handleOpen} className="btn btn-warning primary-button fw-bold">Place Order</Button>
                            <Link as={HashLink} to="/home#cars">
                                <button type="button" className="btn btn-light fw-bold">Back</button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <ConfirmOrderModal
                product={product}
                open={open}
                handleClose={handleClose}
                setOrderSuccess={setOrderSuccess}
            ></ConfirmOrderModal>
        </>
    );
};

export default ConfirmOrder;