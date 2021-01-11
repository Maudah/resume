import React, { Component, Fragment } from "react";
import './style.css'

export default class Home extends Component {
  
  render() {
    const { startVideo } = this.props;
    return (
      <div id='HomeSection' className='home-page-container'>
        <Fragment>
          <div>
            <video className='home-page-video' autoPlay loop={true} poster="images/FFFFFF-0.png" muted={true} data-reactid=".0.1.0.0">
              <source type="video/mp4" data-reactid=".0.1.0.0.0" src={startVideo} />
            </video>
            <div className="home-page-text-content">
              <h1 id='slide'>Hi, </h1>
              <h1 id='slide1'>I'm Lital </h1>
              <h2 id='slide2'>DevOps and infrastructures engineer at CEVA .Inc</h2>
              <p id='element'>C++ | Python | C | HTML | CSS | React-Native</p>
            </div>
          </div>
        </Fragment>
      </div>
    );
  }
}

