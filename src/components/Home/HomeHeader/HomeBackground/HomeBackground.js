import React from 'react';
import './HomeBackground.scss';

import background from './../../../../img/Home/background.png';

function HomeBackground() {
    return (
        <div>
            <img src={background} alt="background" className="home-layer" />
            <div className="home-layer home-oblique">
                <div className="home-oblique-background home-oblique-background1" />
            </div>
            <div className="home-layer home-oblique">
                <div className="home-oblique-background home-oblique-background2" />
            </div>
        </div>
    )
}

export default HomeBackground;