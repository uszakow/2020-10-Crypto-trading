import React from 'react';
import './Menu.scss';

import Logo from './../Logo/Logo';
import Navigation from './Navigation/Navigation';

function Menu() {
    return (
        <div className="menu">
            <Logo />
            <Navigation />
        </div>
    )
}

export default Menu;