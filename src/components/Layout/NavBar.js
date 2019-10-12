import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import RegisterAttorney from '../Auth/AttorneyRegister/RegisterAttorney';
import RegisterClient from '../Auth/ClientRegister/RegisterClient'
import AttorneyLogin from '../Auth/AttorneyLogin/AttorneyLogin';
import ClientLogin from '../Auth/ClientLogin/ClientLogin';
import './NavBar.css';

const NavBar = ({ currentUser, setCurrentUser, logout }) => {
    
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
                        <NavDropdown title="Login" id="collasible-nav-dropdown">
                            <NavDropdown.Item><RegisterAttorney /></NavDropdown.Item>
                            <NavDropdown.Item><RegisterClient /></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Register" id="collasible-nav-dropdown">
                            <NavDropdown.Item><AttorneyLogin /></NavDropdown.Item>
                            <NavDropdown.Item><ClientLogin /></NavDropdown.Item>
                        </NavDropdown>
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
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Account Settings</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
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
                        <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        </> 
    );

    const renderSwitch = (userType) => {
        switch(userType) {
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
            { renderSwitch(currentUser && currentUser.user_type) }
        </>
    );
};

export default NavBar;