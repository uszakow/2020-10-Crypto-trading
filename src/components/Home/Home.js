import React from 'react';
import './Home.scss';

import HomeBackground from './HomeBackground/HomeBackground';
import HomeHeaderText from './HomeHeaderText/HomeHeaderText';
import HomeHeaderVideo from './HomeHeaderVideo/HomeHeaderVideo';

function Home() {
    return (
        <header className="home-wrap">
            <HomeBackground />
            <div className="home-content">
                <HomeHeaderText />
                <HomeHeaderVideo />
            </div>
        </header>
    )
}

export default Home;