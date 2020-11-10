import React, { Component } from "react";
import './style.css'
import startVideo from "../../images/Home_video.mp4";
import Spinner from 'react-bootstrap/Spinner';

export default class Home extends Component {
  state = {
    sideNavLeft: false,
  }
  render() {
    console.log(startVideo, '0000000');
    return (
      <div id='HomeSection' className='home-page-container'>
        {!startVideo && <Spinner animation="border" variant="dark" />}
        {startVideo && <div>
          <video className='home-page-video' autoPlay loop={true} muted={true} data-reactid=".0.1.0.0">
            <source type="video/mp4" data-reactid=".0.1.0.0.0" src={startVideo} />
          </video>
          <div className="home-page-text-content">
            <h1 id='slide'>Hi, </h1>
            <h1 id='slide1'>I'm Lital </h1>
            <h2 id='slide2'>Infrastructures and DevOps engineer at CEVA .Inc</h2>
            <p id='element'>C++ | Python | C | HTML | CSS | React-Native</p>
          </div>
        </div>}

      </div>
    );
  }
}

