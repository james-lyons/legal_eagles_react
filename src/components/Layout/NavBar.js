import React from 'react';
import { NavLink } from 'react-router-dom';
import Register from '../Auth/RegisterAttorney';
import Login from '../Auth/ClientLogin';
import './NavBar.css';

const NavBar = ({ currentUser, setCurrentUser, logout }) => {
    const links = (
        <>
            
        </>
    );

    const attorneyLinks = (
        <>
            <div>attorney</div>
        </>
    );

    const clientLinks = (
        <>
            <div>client</div>
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
            { this.renderSwitch(currentUser.user_type) }
        </>
    );
};

export default NavBar;