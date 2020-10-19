import React from 'react';
import './Home.scss';

import HomeBackground from './HomeBackground/HomeBackground';
import HomeHeaderText from './HomeHeaderText/HomeHeaderText';
import HomeHeaderVideo from './HomeHeaderVideo/HomeHeaderVideo';
import HomeButtonDown from './HomeButtonDown/HomeButtonDown';

function Home() {
    return (
        <header className="home-wrap">
            <HomeBackground />
            <div className="home-content">
                <HomeHeaderText />
                <HomeButtonDown />
                <HomeHeaderVideo />
            </div>
        </header>
    )
}

export default Home;