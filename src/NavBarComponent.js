import React from 'react'
import {Link} from 'react-router-dom'
import './css/NavBarComponent.css'

const NavBarComponent = () => (
    <div className="nav-bar">
        <span><Link to="/">Home</Link></span>
        <span><Link to="/contact">Contact</Link></span>
        <span><a href="https://www.linkedin.com/in/ramon-rovirosa-0b954552/" rel="noopener noreferrer" target="_blank">Resume</a></span>
        <span><Link to="/travel">Travel</Link></span>
    </div>
);

export default NavBarComponent;