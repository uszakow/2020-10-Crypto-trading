import React from 'react';
import './HomeHeader.scss';

import HomeBackground from './HomeBackground/HomeBackground';
import HomeHeaderText from './HomeHeaderText/HomeHeaderText';
import HomeHeaderVideo from './HomeHeaderVideo/HomeHeaderVideo';
import HomeButtonDown from './HomeButtonDown/HomeButtonDown';

function HomeHeader() {
    return (
        <header className="home-header-wrap">
            <HomeBackground />
            <div className="home-header-content">
                <HomeHeaderText />
                <HomeButtonDown />
                <HomeHeaderVideo />
            </div>
        </header>
    )
}

export default HomeHeader;