import React from 'react';
import './TeamSocialButton.scss';

function TeamSocialButton(props) {
    const { item } = props;
    let photoSocialMedia;
    if (Object.keys(item)[0] === "Facebook") {
        photoSocialMedia = require("./../../../../../../img/TeamSocialButtons/fb.svg")
    } else if (Object.keys(item)[0] === "LinkedIn") {
        photoSocialMedia = require("./../../../../../../img/TeamSocialButtons/linkedin.svg");
    }

    return (
        <a href={Object.values(item)[0]} className="home-team-socialbutton" target="_blank" rel="noopener noreferrer">
            <img src={photoSocialMedia} alt={Object.keys(item)[0]} />
        </a>
    )
}

export default TeamSocialButton;