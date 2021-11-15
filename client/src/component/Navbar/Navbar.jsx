import React from 'react';
import './navbar.css'
import Logo from '../../assets/img/navbar-logo.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar__logo"/>
                <div className="header">Messenger</div>
                <div className="login">Login</div>
                <div className="registration">Registration</div>
            </div>
        </div>
    );
};

export default Navbar;