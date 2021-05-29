import React from 'react';
import HeaderMain from '../HEADERMAIN/HeaderMain';
import Navbar from '../NAVBAR/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className="Header-container">
            <Navbar></Navbar>
            <HeaderMain />
        </div>
    );
};

export default Header;