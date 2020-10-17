import React from 'react';
import './Navigation.scss';

import NavigationItem from './NavigationItem/NavigationItem';

const menuItems = [
    {
        title: 'ICO',
        href: '/'
    },
    {
        title: 'Team',
        href: '/team'
    },
    {
        title: 'Contact',
        href: '/contact'
    }
]

function Navigation() {
    return (
        <nav className="menu-nav">
            {menuItems.map((item, index) => (
                <NavigationItem key={index} item={item} />
            ))}
        </nav>
    )
}

export default Navigation;