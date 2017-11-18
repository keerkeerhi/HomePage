import React, { Component } from 'react';
import 'video.js/dist/video-js.css';
import videojs from 'video.js'
import videoflash from 'videojs-flash'
import video from 'videojs-contrib-hls';
import logo from './assets/logo.png';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to dayu1</h2>
        </div>
        <p className="App-intro">
          to Be Continue...
        </p>
        <video id="my_video_1" className="video-js vjs-default-skin thisVideo" controls preload="auto"
               data-setup='{}'>
          {/*<source src="http://183.251.61.207/PLTV/88888888/224/3221225922/index.m3u8" type="application/x-mpegURL" />*/}
        </video>
        {/*<video id="example-video" width={600} height={300} class="video-js vjs-default-skin" controls>
          <source
            src="http://183.251.61.207/PLTV/88888888/224/3221225922/index.m3u8"
            type="application/x-mpegURL" />
        </video>*/}
      </div>
    );
  }

  componentDidMount() {
    let v = document.getElementById("my_video_1");
    var options = {hls: {
      withCredentials: true
    }};

    videojs(v, {flash: options});
    var player = videojs('my_video_1');

    player.src({
      src: 'http://183.251.61.207/PLTV/88888888/224/3221225922/index.m3u8',
      type: 'application/x-mpegURL',
      withCredentials: true
    });
    // console.log('------->',document.getElementById("example-video"))
    // var player = videojs('example-video');
    // player.play();
  }
}

export default App;
