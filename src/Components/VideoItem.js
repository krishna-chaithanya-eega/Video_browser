import React from 'react';
import '../VideoItem.css';

const VideoItem = (props) => {
    return (
        <>
            <div className="Video-Container" onClick={() => props.onVideoSelect(props.video)}>

                <div className="item">
                    <img src={props.video.snippet.thumbnails.medium.url} alt="thumbnail" />
                </div>
                <div className="item">
                    <h5 >{props.video.snippet.title}</h5>
                </div>

                
            </div>

        </>

    );
};

export default VideoItem;







