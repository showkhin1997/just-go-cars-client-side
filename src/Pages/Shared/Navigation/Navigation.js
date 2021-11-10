import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import './Navigation.css';


const Navigation = () => {
    return (
        <>
            <Navbar sticky="top" className="navbar-bg" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="#home" className="fst-italic">JustGOCars</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        <Nav.Link to="/home#home" className="text-light">HOME</Nav.Link>
                        <Nav.Link to="/home#services" className="text-light ">CARS</Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a href="#login">korim</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;