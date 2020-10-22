import React from 'react';
import './Page404.scss';

import { Link } from 'react-router-dom';

function Page404() {
    return (
        <div className="page404-wrap">
            <h1>This page doesn't exist</h1>
            <p>Maybe this page was deleted. You could come back to <Link to="/">the main page</Link></p>
        </div>
    )
}

export default Page404;