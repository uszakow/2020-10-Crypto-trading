import React, { useState, useEffect } from 'react';
import './Team.scss';

import axios from 'axios';

import TeamItem from './TeamItem/TeamItem';

function Team() {
    const [teamArr, setTeam] = useState([]);
    const [shift, setShift] = useState('1');

    useEffect(() => {
        try {
            const getTeamFromServer = async () => {
                const url = "http://localhost:3001/team";
                const res = await axios.get(url);

                setTeam(res.data)
            }
            getTeamFromServer();
        } catch (e) {
            console.log(e);
        }
    }, [])

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
                <h2 className="home-team-title">Team</h2>
                <div className="home-team-wrap">
                    {teamArr.map((item, index) => (
                        <TeamItem key={index} item={item} />
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