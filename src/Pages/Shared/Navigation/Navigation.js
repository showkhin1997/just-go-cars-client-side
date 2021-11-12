import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Navigation.css';


const Navigation = () => {
    const { user, logOut } = useAuth();
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
                        <span className="fst-italic ms-2">JustGOCars</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        {
                            user.email &&
                            <Navbar.Text className="ms-5 me-5">
                                <span className="text-white"> Welcome </span> <small className="text-white fw-bold fs-5 ms-2">{user?.displayName}</small>
                            </Navbar.Text>
                        }
                        <Nav.Link as={HashLink} to="/home#home" className="text-light">HOME</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#cars" className="text-light ">CARS</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contuctus" className="text-light ">CONTUCT US</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#bestdeal" className="text-light ">BEST DEALS</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard" className="text-light ">DASBOARD</Nav.Link>
                        {
                            user?.email ? <Button onClick={logOut} variant="light" className="ms-2 fw-bold">Logout</Button>
                                :
                                <Link to="/login">
                                    <button type="button" className="btn btn-warning primary-button fw-bold">Login</button>
                                </Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;