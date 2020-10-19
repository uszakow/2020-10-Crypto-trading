import React from 'react';
import './SocialButtons.scss';

import SocialButton from './SocialButton/SocialButton';

import twitter from './../../img/SocialButtons/twitter.svg';
import facebook from './../../img/SocialButtons/fb.svg';

const socialMedia = [
    {
        link: "https://twitter.com/",
        img: twitter
    },
    {
        link: "https://www.facebook.com/",
        img: facebook
    }
]

function SocialButtons() {
    return (
        <div className="socialbuttons-wrap">
            {socialMedia.map((item, index) => (
                <SocialButton key={index} item={item} />
            ))}
        </div>
    )
}

export default SocialButtons;