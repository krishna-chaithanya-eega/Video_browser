import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../api/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onTermSubmit = async term => {
        const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
             videos: response.data.items ,
            selectedVideo:response.data.items[0]});

    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })


    };



    render() {
        return (
            <>
                <SearchBar onSubmit={this.onTermSubmit} />
                <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                />
                <VideoDetail video={this.state.selectedVideo}/>

            </>

        );
    }
}

export default App;