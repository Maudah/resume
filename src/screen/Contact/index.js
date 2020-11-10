import React, { Component } from "react";
import './style.css';
import github from '../../images/github-10-128.ico'
import linkedin from '../../images/linkedin-3-128.ico'
import phone from '../../images/phone-128.ico'
import mail from '../../images/mail-128.ico'

export default class Contact extends Component {
  state = {
    sideNavLeft: false,
  }
  render() {
    return (
      <div className='about-page-container' id='ContactSection'>
        <div className="about-page-text-content">
          <h1 className='about-page-header-text'>Contact me</h1>
          <div style={{display:'flex', flexDirection:'row', paddingTop: '5vw', justifyContent: 'center'}}>
          <div style={{ padding: '12px' }}>
            <a href="https://github.com/Maudah"><img height='32px' width='32px'src={github} alt="github" /></a>
          </div>
          <div style={{ padding: '12px' }}>
            <a href="https://www.linkedin.com/in/lital-maudah-75195a185/"><img height='32px' width='32px' src={linkedin} alt="likdin" /></a>
          </div>
          <div style={{ padding: '12px' }}>
            <a href={"mailto:lital.maudah@gmail.com"}><img height='32px' width='32px' src={mail} alt="likdin" /></a>
          </div>
          <div style={{ padding: '12px' }}>
            <a href="tel:+972559681122"><img height='32px' width='32px' src={phone} alt="likdin" /></a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

