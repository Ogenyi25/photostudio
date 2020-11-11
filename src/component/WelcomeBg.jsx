import React from 'react';
import { Link } from 'react-router-dom';
import Testimonials from './Testimonials';



const Welcome = () => {
    return (
        <div className="welcome-page">
            <div className="welcome-section">
                <div className="studio-name">Creative <span>photo studio</span></div>
                <div className="motto">capturing today's moment for tomorrow</div>
                <button className="btn">Learn More</button>
            </div>
            <div className="about-us">
                <div className="about-title">About Our Studio</div>
                <div className="about-heading">
                    the camera is an instrument that teaches people how to see without a camera
                </div>
                <div className="about-body">
                    It’s the end of summer the sweltering heat makes human sweat in the night and makes
                    the plants and trees wilt even in the moonlit nights. The eastern wind breeze brings
                    an eerie feeling, that the monsoon clouds are soon coming, there is a strange silence in the ears,
                    the sky gets darker and darker, the flash of lightning illuminates the dark skies, the sound of
                    thunder fills the heart with fear.
                </div>
                <button className="read-more">
                    Read More
                </button>
            </div>
            <div className="recent-project-section">
                <div className="recent-project-title">recent projects</div>
                <div className="recent-project-heading">
                    check out our recent work
                </div>
                <div className="semi-links">
                    <Link to='#all' className="links">All</Link>
                    <Link to='#' className="links">Nature</Link>
                    <Link to='#' className="links">Men</Link>
                    <Link to='#' className="links">Women</Link>
                    <Link to='#' className="links">Wedding</Link>
                </div>
                <div className="photo-gallery">
                    <div className=" row all-photos container-fluid" id="all">
                        <div className="image">
                            <img src={require('../asset/images/gallery/gallery_item.png')} alt="" className="img1" />
                        </div>
                        <div className="image">
                            <img src={require('../asset/images/gallery/gallery_item_1.png')} alt="" className="img1" />
                        </div>
                        <div className="image">
                            <img src={require('../asset/images/gallery/gallery_item_2.png')} alt="" className="img1" />
                        </div>
                        <div className="image">
                            <img src={require('../asset/images/gallery/gallery_item_3.png')} alt="" className="img1" />
                        </div>
                        <div className="image">
                            <img src={require('../asset/images/gallery/gallery_item_4.png')} alt="" className="img1" />
                        </div>
                        <div className="image">
                            <img src={require('../asset/images/gallery/gallery_item_5.png')} alt="" className="img1" />
                        </div>
                        <div className="image">
                            <img src={require('../asset/images/gallery/gallery_item_6.png')} alt="" className="img1" />
                        </div>
                        <div className="image">
                            <img src={require('../asset/images/gallery/gallery_item_7.png')} alt="" className="img1" />
                        </div>
                        <div className="image">
                            <img src={require('../asset/images/gallery/gallery_item_8.png')} alt="" className="img1" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-services">
                <div className="our-service-title">our service</div>
                <div className="our-service-heading">
                    see what we do
                </div>
                <div className="row services container-fluid">
                    <div className="col-md-3 wedding-words">
                        <div className="image">
                            <img src={require('../asset/images/thumbnails/ring.svg')} alt="" className="ring-image" />
                        </div>
                        <div className="text">
                            <div className="heading">wedding photography</div>
                            <div className="body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 wedding-images">
                        <div className="image">
                            <img src={require('../asset/images/couples.png')} alt="" className="wedding" />
                        </div>
                    </div>
                </div>


                <div className="row services container-fluid">
                    <div className="col-md-3 nature-images">
                        <div className="image">
                            <img src={require('../asset/images/nature.png')} alt="" className="animal-img" />
                        </div>
                    </div>
                    <div className="col-md-8 nature-words">
                        <div className="image">
                            <img src={require('../asset/images/leaf.png')} alt="" className="leaf-img" />
                        </div>
                        <div className="text">
                            <div className="heading">nature photography</div>
                            <div className="body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Testimonials />
        </div>
    )
}


export default Welcome;