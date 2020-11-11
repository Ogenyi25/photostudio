import React from 'react';
import Navbar from '../component/Navbar';



const Services = () => {
    return (
        <div className="services-page">
            <div className="head">
                <Navbar />
            </div>
            <div className="service-page">
                best <span>services</span>
            </div>
            <div className="our-services">
                <div className="our-service-title">our service</div>
                <div className="our-service-heading">
                    what we offer
                </div>
                <div className="row services container-fluid">
                    <div className="col-md-3 wedding-words">
                        <div className="image">
                            <img src={require('../asset/images/wedding.png')} alt="" className="ring-image" />
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
            <div className="pricing-section">
                <div className="pricing-section-title">pricing table</div>
                <div className="pricing-section-heading">
                    check out our pricing plan
                </div>

                <div className="row price-plan container-fluid">
                    <div className="standard-plan col-md-3">
                        <div className="standard-card">
                            <img src={require('../asset/images/thumbnails/ring.svg')} alt="" className="ring-image" />
                            <div className="wed">wedding coverage</div>
                        </div>
                    </div>
                    <div className="standard-plan col-md-3">
                    <div className="standard-card">
                            <img src={require('../asset/images/thumbnails/wed.svg')} alt="" className="wed-image" />
                            <div className="wed">birthday photoshot</div>
                        </div>
                    </div>
                    <div className="standard-plan col-md-3">
                    <div className="standard-card">
                            <img src={require('../asset/images/thumbnails/foto.svg')} alt="" className="foto-image" />
                            <div className="wed">outdoor shot</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;