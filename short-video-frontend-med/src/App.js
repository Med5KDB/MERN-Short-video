import React, { useEffect, useState } from 'react';
import axios from './components/axios';
import Video from './components/Video';
import './App.css';

const App = () => {
  // const [videos, setVideos] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await axios.get("/v2/posts");
  //     setVideos(res.data);
  //   }
  //   fetchData();
  // }, []);
  return (
    <div className="app">
      <div className="app__videos">
        {/* { videos.map(({url, channel, description, song, likes, shares,messages}) => (
          <Video 
            key={url}
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            shares={shares}
            messages={messages}
          />
        ))} */}
        <Video
            url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
            channel="Med5"
            description="Just love using React to code with big screen"
            song="This is a Linux PC"
            likes={345}
            shares={200}
            messages={94}
        />
        <Video
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4"
          channel="Big G Tiapakh"
          description="GSD is crazy about listening music"
          song="Sunday morning editing Music in Linux "
          likes={565}
          shares={190}
          messages={124}
          
        />
      </div>
      
    </div>
  )
}

export default App;

