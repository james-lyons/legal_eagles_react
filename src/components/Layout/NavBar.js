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
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Legal Eagles</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#AttorneySearch">Attorney Search</Nav.Link>
                    </Nav>
                    <Nav>
                        <Register />
                        <Login />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );

    const attorneyLinks = (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Brand href="/">Legal Eagles</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#AttorneySearch">Attorney Search</Nav.Link>
                    </Nav>
                    <NavDropdown title="Account" id="collasible-nav-dropdown">
                        <NavDropdown.Item href = "/attorney_profile">Account Settings</NavDropdown.Item>
                        <NavDropdown.Item onClick = { attorneyLogout }>Logout</NavDropdown.Item>
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
                        <NavDropdown.Item onClick = { clientLogout }>Logout</NavDropdown.Item>
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

// const mapStateToProps = (state) => {
//     return {
//         user_type: user_type
//     };
// };

export default connect(null, { attorneyLogout, clientLogout })(NavBar);