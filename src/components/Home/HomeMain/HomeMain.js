import React from 'react';
import './HomeMain.scss';

import Team from './Team/Team';

function HomeMain({ teamArr, setSelectedTeamMember }) {
    return (
        <>            
            <Team teamArr={teamArr} setSelectedTeamMember={setSelectedTeamMember} />
        </>
    )
}

export default HomeMain;