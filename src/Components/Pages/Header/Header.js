import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../imgaes/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGoogle, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const signInIcon = <FontAwesomeIcon icon={faSignInAlt} />
    const signOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />
    return (
        <>
            <Navbar  Navbar bg="primary" variant="light" expand="lg">
            <Container>
                <Navbar.Brand><img src={logo} width="60" alt="logo" /><span className="ms-3 fw-bold text-white">Website Name</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto d-flex align-items-center">
                    <NavLink to="/home" className="text-decoration-none text-white fw-bold me-4  ">Home</NavLink>
                    <NavLink to="/About" className="text-decoration-none text-white fw-bold me-4  ">About</NavLink>
                    <NavLink to="/register" className="text-decoration-none text-white fw-bold me-4  ">Register</NavLink>
                    <NavLink to="/signin" className="text-decoration-none text-white fw-bold me-4  text-center">{signInIcon}</NavLink>
                    <button className="btn btn-danger text-center">{signOutIcon}</button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default Header;