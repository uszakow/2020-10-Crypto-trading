import React from 'react';
import './HomeButtonDown.scss';

import { HashLink as Link } from 'react-router-hash-link';

function HomeButtonDown() {
    return (
        <div className="home-buttondown">
            <Link to="#home-team-title"><span /></Link>
        </div>
    )
}

export default HomeButtonDown;