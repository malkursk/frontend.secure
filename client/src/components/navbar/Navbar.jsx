import React from 'react';
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar__header'>Messenger</div>
                <div className='navbar__login'>Login</div>
                <div className='navbar__registration'>Registration</div>
            </div>
        </div>
    );
};

export default Navbar;