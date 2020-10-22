import React from 'react';
import './PageInConstruction.scss';

import { Link } from 'react-router-dom';

function PageInConstruction() {
    return (
        <div className="pageinconstruction-wrap">
            <h1>This page is in construction at this moment</h1>
            <p>You could come back to <Link to="/">the main page</Link></p>
        </div>
    )
}

export default PageInConstruction;