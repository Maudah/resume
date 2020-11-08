import React, { Component } from "react";
import './style.css';
import startVideo from "../../images/about.mp4";


export default class About extends Component {
  state = {
    sideNavLeft: false,
  }
  render() {
    return (
      <div className='about-page-container' id='AboutSection'>
         <video className='about-page-video' autoPlay loop={true} muted={true} data-reactid=".0.1.0.0">
          <source type="video/mp4" data-reactid=".0.1.0.0.0" src={startVideo} />
        </video>

        <div className="about-page-text-content">
          <h1 id='slide'>Hi, </h1>
        </div>
      </div>
    );
  }
}

