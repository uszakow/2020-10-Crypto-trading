import React from 'react';

import './TeamItem.scss';

function TeamItem({ item }) {
    const { name, surname, jobtitle, photo, fulltext, links } = item;

    const src = require(`./../../../img/Team/${photo}`);

    return (
        <div className="team-item">
            <img src={src} alt={`${name} ${surname}`} className="team-item-img" />
            <h2 className="team-item-title">{name} {surname}</h2>
            <div className="team-item-jobtitle">{jobtitle}</div>
            <p>{fulltext}</p>
            <h3 className="team-item-linkstitle">Links:</h3>
            {links.map((item, index) => (
                <div key={index}>
                    <span className="team-item-linksname">{Object.keys(item)[0]}: </span>
                    <a href={Object.values(item)[0]}>{Object.values(item)[0]}</a>
                </div>
            ))}
        </div>
    )
}

export default TeamItem;