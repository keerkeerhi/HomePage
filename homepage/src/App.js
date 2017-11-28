import React, { Component } from 'react';
import Player from './component/Player';
import BackGround from './component/BackGround'
import 'video.js/dist/video-js.css';
// import videojs from 'video.js'
// import videoflash from 'videojs-flash'
// import video from 'videojs-contrib-hls';
import logo from './assets/logo.png';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
          <BackGround ></BackGround>
          <div>
              <section>
                  <header className="appTop">
                      <img src={logo} className="App-logo" alt="logo" />
                      <h1>Welcome to dayu1</h1>
                  </header>
              </section>
              <Player src="assets/video.mp4" />
          </div>
      </div>
    );
  }


}

export default App;
