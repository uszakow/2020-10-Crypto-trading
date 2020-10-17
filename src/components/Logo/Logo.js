import React from 'react';
import './Logo.scss';

import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to="/" className="logo">logo</Link>
    )
}

export default Logo;