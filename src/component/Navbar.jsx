import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={require('../asset/images/logo.png')} alt="" className="page-logo"/>
                PhotoStudio
            </div>
            <ul>
                <li className="nav-items">
                    <Link to='/' className="nav-link">Home</Link>
                </li>

                <li className="nav-items">
                    <Link to='/' className="nav-link">About</Link>
                </li>

                <li className="nav-items">
                    <Link to='/' className="nav-link">Services</Link>
                </li>

                <li className="nav-items">
                    <Link to='/' className="nav-link">Gallery</Link>
                </li>
                
                <li className="nav-items">
                    <Link to='/' className="nav-link">Contact Us</Link>
                </li>
            </ul>
            <input type="checkbox" id="check" />
            <label for="check" className="checkbtn"> <i className="fas fa-bars"></i></label>
        </div>
    )
}

export default Navbar;