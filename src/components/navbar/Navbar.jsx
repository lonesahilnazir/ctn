import React from 'react';

import './navbar.css';

const Navbar = () => {
    return (
        <div className='navbar' id='nav'>
            <div className='navbar__logo'>
                <h1>CONSTRUCTION</h1>
            </div>
            <div className='navbar__links'>
                <a href='#nav'>Home</a>
                <a href='#'>About Us</a>
                <a href='#'>Services</a>
                <a href='#'>Project</a>
            </div>
        </div>
    )
}

export default Navbar
