import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import footer from '../../../images/footer.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container mt-5 p-3" id="contuctus">
            <div className="d-flex justify-content-between p-3">
                <div>
                    <img src={footer} className="footer-image" alt="..." />
                </div>
                <div className="ms-2">
                    <h6 className="text-primary">Please Subscibe</h6>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Email"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="primary" id="button-addon2">
                            Subscribe
                        </Button>
                    </InputGroup>
                </div>
            </div>
            <div className="ms-2 w-50 mb-5">
                <h6 className="text-primary">Information</h6>
                <p className="text-light">Find a Car</p>
                <p className="text-light">Listings by City</p>
                <p className="text-light">Certified Pre-Owned</p>
                <p className="text-light">Car Reviews & Ratings</p>
            </div>
            <div className="text-white mt-5 mb-4">
                <p className="text-center">Phone: +0881245687</p>
                <p className="text-center">Email: justgocars@hotmail.com</p>
            </div>
            <small className="text-muted text-end mt-4">© 2021 justGo Cars. All rights reserved.</small>
        </div>
    );
};

export default Footer;