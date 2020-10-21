import React from 'react';
import './HomeMain.scss';

import Team from './Team/Team';
import ContactForm from './ContactForm/ContactForm';

function HomeMain({ teamArr, setSelectedTeamMember }) {
    return (
        <div className="home-main-wrap">
            <Team teamArr={teamArr} setSelectedTeamMember={setSelectedTeamMember} />
            <ContactForm />
        </div>
    )
}

export default HomeMain;