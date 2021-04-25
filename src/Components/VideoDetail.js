import React from 'react';
import '../VideoDetail.css';

const VideoDetail = (props) => {
    if (!props.video) {
        return <div></div>
    }

    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

    return (
        <>
            <div className="Video-Detail">
                
                    <div className="Frame">
                        <iframe width="850" height="415" src={videoSrc} title="YouTube video player" />
                    </div>
                    <div className="description">
                        <h4> {props.video.snippet.title} </h4>
                        <p>{props.video.snippet.description}</p>
                    </div>
                
            </div>


        </>
    );
};


export default VideoDetail;