import React from 'react';
import './HomeMain.scss';

import Team from './Team/Team';

function HomeMain({ teamArr, setSelectedTeamMember }) {
    return (
        <div className="home-main-wrap">            
            <Team teamArr={teamArr} setSelectedTeamMember={setSelectedTeamMember} />
        </div>
    )
}

export default HomeMain;