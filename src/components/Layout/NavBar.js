import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Register from '../../containers/AuthContainer/Register';
import Login from '../../containers/AuthContainer/Login';
import { attorneyLogout } from '../../actions/attorneyActions';
import { clientLogout } from '../../actions/clientActions';
import './NavBar.css';

const NavBar = () => {
    
    const userRole = localStorage.getItem('user_type');

    const links = (
        <>
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <Navbar.Brand className="navbar-a" href="/">
                    <span>
                        <img className="nav-icon" src="./eagle_icon.png" alt="icon"/>
                    </span>
                    Legal Eagles
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav-right">
                        <Register />
                        <Login />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );

    const attorneyLinks = (
        <>
            <Navbar collapseOnSelect expand="md" className="navbar">
                <Navbar.Brand className="navbar-a" href="/">
                    <span>
                        <img className="nav-icon" src="./eagle_icon.png" alt="icon"/>
                    </span>
                    Legal Eagles
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <NavDropdown title="Account" id="collasible-nav-dropdown" className="nav-right">
                        <NavDropdown.Item className="navbar-auth-as" href = "/attorney_profile">Account Settings</NavDropdown.Item>
                        <NavDropdown.Item className="navbar-auth-as" onClick = { attorneyLogout }>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        </>
    );

    const clientLinks = (
        <>
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <Navbar.Brand className="navbar-a" href="/">
                    <span>
                        <img className="nav-icon" src="./eagle_icon.png" alt="icon"/>
                    </span>
                    Legal Eagles
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <NavDropdown title="Account" id="collasible-nav-dropdown" className="nav-right">
                        <NavDropdown.Item className="navbar-auth-as" href = "/client_profile">Account Settings</NavDropdown.Item>
                        <NavDropdown.Item className="navbar-auth-as" onClick = { clientLogout }>Logout</NavDropdown.Item>
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

export default connect(null, { attorneyLogout, clientLogout })(NavBar);