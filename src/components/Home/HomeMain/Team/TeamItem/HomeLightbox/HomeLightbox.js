import React from 'react';
import './HomeLightbox.scss';

function HomeLightbox(props) {
    const { name, surname, jobtitle, fulltext } = props;

    return (
        <div className="home-teamlightbox-wrap">
            {/* <h3>{name} {surname}</h3>
            <div>{jobtitle}</div>
            <div>{fulltext}</div> */}
        </div>
    )
}

export default HomeLightbox;