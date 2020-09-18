import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={require('../asset/images/logo.png')} alt="" className="page-logo" />
                PhotoStudio
            </div>
            <ul>
                <li className="nav-items">
                    <Link to='/home' className="nav-link">Home
                    <hr />
                    </Link>

                </li>

                <li className="nav-items">
                    <Link to='/about-us' className="nav-link">About
                    <hr className="about" />
                    </Link>
                </li>

                <li className="nav-items">
                    <Link to='/services' className="nav-link">Services
                    <hr className="services" />
                    </Link>
                </li>

                <li className="nav-items">
                    <Link to='/gallery' className="nav-link">Gallery
                    <hr className="gallery" />
                    </Link>
                </li>

                <li className="nav-items">
                    <Link to='/contact-us' className="nav-link">Contact Us
                    <hr className="contact" />
                    </Link>
                </li>
            </ul>
            <input type="checkbox" id="check" />
            <label for="check" className="checkbtn"> <i className="fas fa-bars"></i></label>
        </div>
    )
}

export default Navbar;