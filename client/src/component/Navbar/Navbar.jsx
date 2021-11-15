import React from 'react';
import './navbar.less'
import Logo from '../../assets/img/navbar-logo.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar__logo"/>
                <div className="navbar__header">Messenger</div>
                <div className="navbar__login">Login</div>
                <div className="navbar__registration">Registration</div>
            </div>
        </div>
    );
};

export default Navbar;