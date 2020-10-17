import React from 'react';
import './NavigationItem.scss';

import { NavLink } from 'react-router-dom';

function NavigationItem({ item }) {   
    return (
        <NavLink exact to={item.href} className="menu-navigationitem" activeClassName="menu-navigationitem-active">{item.title}</NavLink>        
    )
}

export default NavigationItem;