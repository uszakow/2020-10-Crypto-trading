import React from 'react';
import './HomeHeaderVideo.scss';

import video from './../../../video/Muxia.mp4';
import poster from './../../../img/Home/video_preview.jpg';

function HomeHeaderVideo() {
    return (
        <div className="home-video">
            <video src={video} controls={true} />
            {/* <div className="home-video-poster">
                <img src={poster} alt={"video"} />
            </div> */}
        </div>
    )
}

export default HomeHeaderVideo;