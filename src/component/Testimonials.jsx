import React from 'react';


const Testimonials = () => {
    return (
        <div className=" row testimonials-page container-fluid">
            <div className="col-md-6 testimonial-images">
                <div className="images">
                    <img src={require('../asset/images/testimonials/Clients.png')} alt="" className="review" />
                </div>
            </div>
            <div className="col-md-6 testimonial-words">
                <div className="title">Testimonials</div>
                <div className="heading">Happy Words from some of our highly esteemed customers</div>
                <div className="words">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={require('../asset/images/testimonials/client1.png')} className="d-block w-100 testimonials" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('../asset/images/testimonials/client2.png')} className="d-block w-100 testimonials" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('../asset/images/testimonials/client3.png')} className="d-block w-100 testimonials" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('../asset/images/testimonials/client4.png')} className="d-block w-100 testimonials" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={require('../asset/images/testimonials/client5.png')} className="d-block w-100 testimonials" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Testimonials;