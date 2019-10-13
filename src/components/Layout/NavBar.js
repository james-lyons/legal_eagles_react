import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import RegisterAttorney from '../Auth/AttorneyRegister/RegisterAttorney';
import RegisterClient from '../Auth/ClientRegister/RegisterClient'
import AttorneyLogin from '../Auth/AttorneyLogin/AttorneyLogin';
import ClientLogin from '../Auth/ClientLogin/ClientLogin';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import './NavBar.css';

const NavBar = ({ currentUser, userType, setCurrentUser, setCurrentUserType, logout }) => {
    
    const userRole = localStorage.getItem('user_type');

    const links = (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">No Sign in</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#AttorneySearch">Attorney Search</Nav.Link>
                    </Nav>
                    <Nav>
                        <Register />
                        <Login
                            setCurrentUser = { setCurrentUser }
                            setCurrentUserType = { setCurrentUserType }
                            userType = { userType }
                            />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );

    const attorneyLinks = (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Attorney</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#AttorneySearch">Attorney Search</Nav.Link>
                    </Nav>
                    <NavDropdown title="Account" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Account Settings</NavDropdown.Item>
                        <NavDropdown.Item onClick = { logout }>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        </>
    );

    const clientLinks = (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Client</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#AttorneySearch">Attorney Search</Nav.Link>
                    </Nav>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Account Settings</NavDropdown.Item>
                        <NavDropdown.Item onClick = { logout }>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        </> 
    );

    const renderSwitch = (userRole) => {
        switch(userRole) {
            case 'attorney':
                return attorneyLinks;
            case 'client':
                return clientLinks;
            default:
                return links;
        };
    };

    return (
        <>
            { renderSwitch(userRole) }
        </>
    );
};

export default NavBar;