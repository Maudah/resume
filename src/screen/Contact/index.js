import React, { Component } from "react";
import './style.css';
import SendEmail from '../sendEmail'

export default class Contact extends Component {
  state = {
    sideNavLeft: false,
  }
 
  render() {
    const { github, linkedin, phone, mail } = this.props;
    return (
      <div className='contact-page-container' id='ContactSection'>
        <div className="contact-page-text-content">
          <h1 className='contact-page-header-text'>Contact me</h1>
          <SendEmail/>
          <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '5vw', justifyContent: 'center' }}>
            <div style={{ padding: '12px' }}>
              <a href="https://github.com/Maudah"><img height='32px' width='32px' src={github} alt="github" /></a>
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

