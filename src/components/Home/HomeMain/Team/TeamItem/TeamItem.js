import React from 'react';
import './TeamItem.scss';

import TeamSocialButton from './TeamSocialButton/TeamSocialButton';

function TeamItem(props) {
    const { name, surname, jobtitle, photo, shorttext, links } = props.item;
    const { setSelectedTeamMember } = props;

    const src = require(`./../../../../../img/Team/${photo}`);

    return (
        <div className="home-teamitem-wrap">
            <img src={src} alt={`${name} ${surname}`} className="home-teamitem-img" />
            <button className="home-teamitem-title" onClick={() => setSelectedTeamMember(props.item)} >{name} {surname}</button>
            <div className="home-teamitem-job">{jobtitle}</div>
            <div className="home-teamitem-shorttext">{shorttext}</div>
            <div className="home-teamitem-buttons">
                {links.map((item, index) => (
                    <TeamSocialButton key={index} item={item} />
                ))}
            </div>
        </div>
    )
}

export default TeamItem;