import React, { Component } from "react";
import './style.css'
import startVideo from "../../images/Home_video.mp4";

export default class Home extends Component {
  state = {
    sideNavLeft: false,
  }
  render() {
    return (
      <div className='home-page-container'>
        <video className='home-page-video' autoPlay loop={true} muted={true} data-reactid=".0.1.0.0">
          <source type="video/mp4" data-reactid=".0.1.0.0.0" src={startVideo} />
        </video>
      </div>
    );
  }
}

