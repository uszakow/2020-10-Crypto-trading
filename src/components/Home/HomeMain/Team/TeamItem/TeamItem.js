import React from 'react';
import './TeamItem.scss';

import TeamSocialButton from './TeamSocialButton/TeamSocialButton';
import HomeLightbox from './HomeLightbox/HomeLightbox.js';

function TeamItem(props) {
    const { name, surname, jobtitle, photo, shorttext, fulltext, links } = props.item;
    const src = require(`./../../../../../img/Team/${photo}`);

    return (
        <div className="home-teamitem-wrap">
            <img src={src} alt={`${name} ${surname}`} className="home-teamitem-img" />
            <h3 className="home-teamitem-title">{name} {surname}</h3>
            <div className="home-teamitem-job">{jobtitle}</div>
            <div className="home-teamitem-shorttext">{shorttext}</div>
            <div className="home-teamitem-buttons">
                {links.map((item, index) => (
                    <TeamSocialButton key={index} item={item} />
                ))}
            </div>
            <HomeLightbox name={name} surname={surname} jobtitle={jobtitle} fulltext={fulltext} />
        </div>
    )
}

export default TeamItem;