import React from 'react';
import { Link } from 'react-router-dom';

const Footer =()=> {
    return (
        <div className="footer-section">
            <div className="row footer-links container-fluid">
                <div className="col-md-3 links">
                    <div className="link-title">our services</div>
                    <div className="service-links">
                        <Link to="/" className="service-link">wedding photography</Link>
                        <Link to="/" className="service-link">bithday photoshot</Link>
                        <Link to="/" className="service-link">nature photoshot</Link>
                        <Link to="/" className="service-link">family indoorShot</Link>
                        <Link to="/" className="service-link">outdoor shot</Link>
                    </div>
                </div>
                <div className="col-md-3 links">
                    <div className="link-title">contact info</div>
                    <div className="contact-address">4361 Morningview Lane Artland,  Pall Street Latimer, 
                        F.C.T Abuja,
                    </div>
                    <div className="contacts"><i className="fa fa-mobile" />08134756623, 09081046069</div>
                    <div className="contacts"><i className="fa fa-envelope-o" />johnogenyi4real@gmail.com</div>
                    <div className="contacts"><i className="fa fa-globe" />www.photostudiotesting.com</div>

                </div>
                <div className="col-md-3 links">
                    <div className="link-title">our gallery</div>
                    <div className="row gallery container-fluid">
                        <div className="col-md-3 pics">
                            <Link to='www.instagram.com/ogenyi21'><i className="fa fa-instagram" /></Link>
                        </div>
                        <div className="col-md-3 pics th1">
                            <Link to='www.instagram.com/ogenyi21'><i className="fa fa-instagram" /></Link>
                        </div>
                        <div className="col-md-3 pics th2">
                            <Link to='www.instagram.com/ogenyi21'><i className="fa fa-instagram" /></Link>
                        </div>
                        <div className="col-md-3 pics th3">
                            <Link to='www.instagram.com/ogenyi21'><i className="fa fa-instagram" /></Link>
                        </div>
                        <div className="col-md-3 pics th4">
                            <Link to='www.instagram.com/ogenyi21'><i className="fa fa-instagram" /></Link>
                        </div>
                        <div className="col-md-3 pics th5">
                            <Link to='www.instagram.com/ogenyi21'><i className="fa fa-instagram" /></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 links">
                    <div className="link-title">newsletter</div>
                    <div className="body">Stay updated with our latest trends. 
                        Subscribe to our newsletter now to get connected
                    </div>
                    <input type="text" className="newsletter" placeholder="Enter your email address" />
                    <button className="enter">Subscribe</button>
                </div>
            </div>
            <div className="footer-bottom">
                Copyright ©2020 All rights reserved | This site was designed for PhotoStudios by <Link to='www.ogenyi.com' className="strong">OGENYI25</Link>
            </div>
        </div>
    )
}

export default Footer;