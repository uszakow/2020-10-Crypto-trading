import React, { useState, useEffect } from 'react';
import './Home.scss';

import axios from 'axios';

import HomeHeader from './HomeHeader/HomeHeader';
import HomeMain from './HomeMain/HomeMain';
import HomeLightbox from './HomeLightbox/HomeLightbox';

function Home() {
    const [teamArr, setTeam] = useState([]);
    const [teamMember, setTeamMember] = useState();

    const setSelectedTeamMember = (item) => {
        setTeamMember(item);

        //stop video play
        const video = document.getElementById('home-video-player');
        if (video) {
            video.pause();
        }
    }
    const clearSelectedTeamMember = () => {
        setTeamMember();
    }

    useEffect(() => {
        try {
            const getTeamFromServer = async () => {
                const url = "https://crypto-trading-2020-10.herokuapp.com/team";
                const res = await axios.get(url);

                setTeam(res.data)
            }
            getTeamFromServer();
        } catch (e) {
            console.log(e);
        }
    }, [])

    return (
        <>
            <HomeHeader />
            <HomeMain teamArr={teamArr} setSelectedTeamMember={setSelectedTeamMember} />
            <HomeLightbox teamMember={teamMember} clearSelectedTeamMember={clearSelectedTeamMember} />
        </>
    )
}

export default Home;