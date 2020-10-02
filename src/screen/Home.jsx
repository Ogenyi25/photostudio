import React from 'react';
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
        </div>
    )
}


export default Home;