import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Alert from '@mui/material/Alert';
import { useParams } from 'react-router';
import Navigation from '../../Shared/Navigation/Navigation';
import MoreConfirmOrderModal from './MoreConfirmOrderModal';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const MoreConfirmOrder = () => {
    const [moreProduct, setMoreProduct] = useState({});
    const { productId } = useParams();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [orderSuccess, setOrderSuccess] = useState(false);

    useEffect(() => {
        const url = `https://intense-cliffs-24776.herokuapp.com/moreProducts/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMoreProduct(data))
    }, [])
    return (
        <>
            <div>
                <Navigation></Navigation>
                {orderSuccess && <Alert severity="success" sx={{ m: 3 }}>Purchess Successfully!</Alert>}
                <div className="container mt-5 p-2">
                    <Card style={{ width: '20rem' }} className="border-0">
                        <Card.Img variant="top" src={moreProduct?.img} />
                        <Card.Body>
                            <Card.Title>{moreProduct?.productName}</Card.Title>
                            <Card.Text>
                                Manufacturer: {moreProduct?.manufacturer}
                            </Card.Text>
                            <Card.Text>
                                {moreProduct?.description}
                            </Card.Text>
                            <Card.Text>
                                <small>Price: </small>${moreProduct?.price}
                            </Card.Text>
                            <Button onClick={handleOpen} className="btn btn-warning primary-button fw-bold">Place Order</Button>
                            <Link to="/moreproducts">
                                <button type="button" className="btn btn-light fw-bold">Back</button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <Footer></Footer>
            </div>
            <MoreConfirmOrderModal
                moreProduct={moreProduct}
                open={open}
                handleClose={handleClose}
                setOrderSuccess={setOrderSuccess}
            ></MoreConfirmOrderModal>
        </>
    );
};

export default MoreConfirmOrder;