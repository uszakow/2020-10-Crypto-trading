import React from 'react';
import './HomeLightbox.scss';

function HomeLightbox(props) {
    // teamMember could be undefined or contains { name, surname, jobtitle, fulltext }
    const { teamMember, clearSelectedTeamMember } = props;

    if (teamMember) {
        return (
            <div className="home-lightbox-wrap">

                <div className="home-lightbox-content">
                    <div>
                        <button className="home-lightbox-controller" onClick={clearSelectedTeamMember}>
                            <span />
                        </button>
                    </div>
                    <h3 className="home-lightbox-title">{teamMember.name} {teamMember.surname}</h3>
                    <div className="home-lightbox-jobtitle">{teamMember.jobtitle}</div>
                    <div className="home-lightbox-text">{teamMember.fulltext}</div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default HomeLightbox;