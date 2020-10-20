import React, { useState, useEffect } from 'react';
import './Team.scss';

import TeamItem from './TeamItem/TeamItem';

function Team({ teamArr, setSelectedTeamMember }) {
    const [shift, setShift] = useState('1');

    useEffect(() => {
        const teamwrap = document.querySelector('.home-team-wrap');
        if (teamwrap) {
            if (shift === "2") {
                teamwrap.classList.add('home-team-shift');
            } else if (shift === "1") {
                teamwrap.classList.remove('home-team-shift');
            }
        }
    }, [shift])
    const isShift = (e) => {
        setShift(e.currentTarget.value);
    }

    if (teamArr.length) {
        return (
            <>
                <h2 className="home-team-title" id="home-team-title">Team</h2>
                <div className="home-team-wrap">
                    {teamArr.map((item, index) => (
                        <TeamItem key={index} item={item} setSelectedTeamMember={setSelectedTeamMember} />
                    ))}
                </div>
                <div className="home-teamwrap-controller">
                    <input type="radio" id="team-shift1" name="team-shift" value="1" defaultChecked onChange={e => isShift(e)} />
                    <label htmlFor="team-shift1" />
                    <input type="radio" id="team-shift2" name="team-shift" value="2" onChange={e => isShift(e)} />
                    <label htmlFor="team-shift2" />
                </div>
            </>
        )
    } else {
        return null;
    }
}

export default Team;