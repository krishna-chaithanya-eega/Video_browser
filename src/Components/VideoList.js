import React from 'react';
import VideoItem from './VideoItem';
import '../VideoList.css'

const VideoList = (props) => {
    const renderedList = props.videos.map((video) => {
        return (
            <VideoItem
                key={video.id.videoId}
                onVideoSelect={props.onVideoSelect}
                video={video}

            />

        );
    });

    return (
        <div className="Video-List">
            <div className="">

                {renderedList}

            </div>
        </div>
    )

};


export default VideoList;
