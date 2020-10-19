import React from 'react';
import './SocialButton.scss';

function SocialButton(props) {
    const { link, img } = props.item;

    return (
        <a href={link} className="socialbuttons-button" target="_blank" rel="noopener noreferrer">
            <img src={img} alt={link} />
        </a>
    )
}

export default SocialButton;