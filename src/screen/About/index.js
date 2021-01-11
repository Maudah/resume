import React, { Component } from "react";
import './style.css';


export default class About extends Component {
  render() {
    return (
      <div className='about-page-container' id='AboutSection' onSho>
        <div className="about-page-text-content">
          <h1 className='about-page-header-text'>About me</h1>
          <p id='slide3' className='about-page-content-text'>DevOps and infrastructures engineer at CEVA .Inc</p>
          <p id='slide3' className='about-page-content-text'>Graduated with honors of B.Sc. in software engineering at JCT.</p>
          <main className='timeline-content'>
            <img src={this.props.mePhoto} alt="me" className='me-photo' />
            <div className='padding-timeline'>
              <p className='timeline' id='jct-icon'>B.Sc. in software  engineering </p>
              <p className='timeline' id='microsoft-icon'>Hackathon with cooperation with Microsoft: developing a system that predicts the chance to get ill
diabetes type 2 by behavioral symptoms.</p>
              <p className='timeline' id='upstream-icon'>Fontend developer- The product, C4, detects cybersecurity issues and other abnormal behaviors of the client’s vehicles.
Developed a professional simulation tool</p>
              <p className='timeline' id='ceva-icon'>DevOps and infrastructures engineer  </p>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

