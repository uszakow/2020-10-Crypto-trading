import React, { useState, useEffect } from 'react';

import axios from 'axios';

import TeamItem from './TeamItem/TeamItem';

function Team() {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        try {
            const getTeamFromServer = async () => {
                const url = "https://crypto-trading-2020-10.herokuapp.com/team";
                const res = await axios.get(url);

                setTeam(res.data);
            }
            getTeamFromServer();
        } catch (e) {
            console.log(e);
        }
    }, [])

    return (
        <div className="page-wrap">
            <h1>Our Team</h1>
            {team.map((item, index) => (
                <TeamItem key={index} item={item} />
            ))}
        </div>
    )
}

export default Team;