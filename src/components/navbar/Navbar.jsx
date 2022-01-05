import React from 'react';

import './navbar.css';

const Navbar = () => {
    const [isOpen, setisOpen] = React.useState(false)
    function handleClick() {
        setisOpen(!isOpen);
      }

    return (
        <div className='navbar' id='nav'>
            <div className='navbar__logo'>
                <h1>CONSTRUCTION</h1>
            </div>
            <div className={`navbar__links ${ isOpen ? "navbar__links--block" : "navbar__links--hidden" }`}>
                <a href='#nav'>Home</a>
                <a href='#'>About Us</a>
                <a href='#'>Services</a>
                <a href='#'>Project</a>
            </div>
            <button className={`navbar__toggle-menu ${ isOpen && "navbar__toggle-menu--open"}`} id='menu-bar' onClick={handleClick}>
                <span />
                <span />
                <span />
            </button>
        </div>
    )
}

export default Navbar
