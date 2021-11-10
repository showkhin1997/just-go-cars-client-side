import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Product.css';

const product = ({ product }) => {
    const { productName, description, img, price } = product;
    return (
        <Col>
            <Card className="p-2 h-100 card-body-container">
                <Card.Img variant="top" src={img} className="w-75 mx-auto" />
                <Card.Body className="p-3">
                    <Card.Title className="text-center m-3 text-primary fw-bold fs-4">{productName}</Card.Title>
                    <Card.Text className="text-start">
                        {description}
                    </Card.Text>
                    <Card.Text>
                        <small>Price: <span className="fw-bold text-primary fs-5"> ${price}</span></small>
                    </Card.Text>
                    <button type="button" className="btn btn-warning primary-button fw-bold">Buy Now</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default product;