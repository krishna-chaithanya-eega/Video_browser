import axios from 'axios';

const KEY="AIzaSyBbXxD720eD2ZjESH1F_3D-QyXxh7c41jo";


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 15,
      key: KEY
  }
});