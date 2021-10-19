import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../imgaes/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import useAuth from '../../Context/useAuth';


const Header = () => {
    const { user, logOut} = useAuth()
    const signInIcon = <FontAwesomeIcon icon={faSignInAlt} />
    const signOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />
    return (
            <Navbar sticky="top" Navbar bg="primary" variant="light" expand="lg">
            <Container>
                <NavLink to="/home" className="text-decoration-none"><img src={logo} width="60" alt="logo" /><span className="ms-3 fw-bold text-white fs-5">Life Care  Clinic</span></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto d-flex align-items-center">
                    <NavLink activeClassName="active-link" to="/home" className="text-decoration-none text-white fw-bold me-4  ">Home</NavLink>
                    <NavLink activeClassName="active-link" to="/about" className="text-decoration-none text-white fw-bold me-4  ">About</NavLink>
                    <NavLink activeClassName="active-link" to="/ourdoctors" className="text-decoration-none text-white fw-bold me-4  ">Doctors</NavLink>
                    <NavLink activeClassName="active-link" to="/register" className="text-decoration-none text-white fw-bold me-4  ">Register</NavLink>
                  { user.displayName ? <button onClick={logOut} className="btn btn-danger text-center">{signOutIcon}</button> :
                    <NavLink to="/signin" className="text-decoration-none text-white fw-bold me-4  text-center">{signInIcon}</NavLink>}
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="ms-3 text-white">
                            Signed in as: <span className="fw-bold">{user.displayName}</span>
                        </Navbar.Text>
                    </Navbar.Collapse>
                        <div>
                        <img  width="50px" style={{borderRadius:"50%", marginLeft:"20px"}} src={user.photoURL} alt="" /> 
                        </div>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;