import React from 'react';
import './HomeHeaderVideo.scss';

import video from './../../../../video/Muxia.mp4';

function HomeHeaderVideo() {
    const playVideo = () => {
        const video = document.getElementById('home-video-player');
        const playbutton = document.querySelector('.home-video-playbutton');

        video.play();
        video.controls = true;
        playbutton.classList.add('hide');
    }
    const pauseVideo = () => {        
        const video = document.getElementById('home-video-player');
        const playbutton = document.querySelector('.home-video-playbutton');

        video.pause();
        video.controls = false;
        playbutton.classList.remove('hide');
    }

    return (
        <div className="home-video">
            <video src={video} controls={false} id="home-video-player" onPause={pauseVideo} />
            <div className="home-video-playbutton">
                <button onClick={playVideo}><span /></button>
            </div>
        </div>
    )
}

export default HomeHeaderVideo;