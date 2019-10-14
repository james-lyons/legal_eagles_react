import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Register from '../../containers/AuthContainer/Register';
import Login from '../../containers/AuthContainer/Login';
import './NavBar.css';

const NavBar = ({ userType, setCurrentUser, setCurrentUserType, logout }) => {
    
    const userRole = localStorage.getItem('user_type');

    const links = (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Legal Eagles</Navbar.Brand>
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
                <Navbar.Brand href="/">Legal Eagles</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#AttorneySearch">Attorney Search</Nav.Link>
                    </Nav>
                    <NavDropdown title="Account" id="collasible-nav-dropdown">
                        <NavDropdown.Item href = "/attorney_profile">Account Settings</NavDropdown.Item>
                        <NavDropdown.Item onClick = { logout }>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        </>
    );

    const clientLinks = (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Legal Eagles</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#AttorneySearch">Attorney Search</Nav.Link>
                    </Nav>
                    <NavDropdown title="Account" id="collasible-nav-dropdown">
                        <NavDropdown.Item href = "/client_profile">Account Settings</NavDropdown.Item>
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