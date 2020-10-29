import React from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import Welcome from '../component/WelcomeBg';



const Home = () => {
    return (
        <div className="landing">
            <div>
                <Navbar />
            </div>
            <div>
                <Welcome />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}


export default Home;