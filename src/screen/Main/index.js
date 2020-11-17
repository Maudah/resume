import React, { Component } from 'react';
import './style.css';
import { HashLink } from "react-router-hash-link";

import home from '../../images/house-128.ico'
import about from '../../images/businesswoman-128.ico'
import portfolio from '../../images/Portfolio-32.ico'
import certificates from '../../images/pages-1-128.ico'
import contact from '../../images/phone-20-128.ico'

import About from '../About'
import Home from '../Home'
import Portfolio from '../Portfolio'
import Certificates from '../Certificates'
import Contact from '../Contact'
import loader from "../../images/Infinity-1s-800px.gif";

import mePhoto from "../../images/me.jpg";

import certificate1 from "../../images/certificate1.jpg";
import certificate2 from "../../images/certificate2.jpg";
import certificate3 from "../../images/certificate3.jpg";

import github from '../../images/github-10-128.ico'
import linkedin from '../../images/linkedin-3-128.ico'
import phone from '../../images/phone-128.ico'
import mail from '../../images/mail-128.ico'

import startVideo from "../../images/Home_video.mp4";

import Simulator from "../../images/Simulator.jpg";
import Motors from "../../images/motors.JPG";
import Missible from "../../images/Prediction-missile-fall.jpg";
import RTOS from "../../images/Trafficlight.png";
import WeatherApp from "../../images/WeatherApp.png";

class SideBar extends Component {
  constructor() {
    super();
    this.state = { isLoading: true }
  }

  componentDidMount() {
    console.log('here');
    this.setState({ isLoading: false });
  }
  render() {
    const { isLoading } = this.state;
    return (
      <div className='App-container'>
        <div className='slide-bar'>
          <div className='slider-item'>
            <HashLink style={{ textDecoration: 'none' }} to="/#HomeSection" smooth><img height='32px' width='32px' src={home} alt="home" /></HashLink>
          </div>
          <div className='slider-item'>
            <HashLink style={{ textDecoration: 'none' }} to="/#AboutSection" smooth><img height='32px' width='32px' src={about} alt="about" /></HashLink>
          </div>
          <div className='slider-item'>
            <HashLink style={{ textDecoration: 'none' }} to="/#PortfolioSection" smooth><img height='32px' width='32px' src={portfolio} alt="portfolio" /></HashLink>
          </div>
          <div className='slider-item'>
            <HashLink style={{ textDecoration: 'none' }} to="/#CertificatesSection" smooth><img height='32px' width='32px' src={certificates} alt="certificates" /></HashLink>
          </div>
          <div className='slider-item'>
            <HashLink style={{ textDecoration: 'none' }} to="/#ContactSection" smooth><img height='32px' width='32px' src={contact} alt="contact" /></HashLink>
          </div>
        </div>
        <div>
          {isLoading && <div className='loader-background'>
            <img src={loader} alt="me" className='loader-image' />
          </div>}
          {!isLoading && <div>
            <Home startVideo={startVideo} />
            <About mePhoto={mePhoto} />
            <Portfolio Simulator={Simulator} Motors={Motors} Missible={Missible} RTOS={RTOS} WeatherApp={WeatherApp} />
            <Certificates certificate1={certificate1} certificate2={certificate2} certificate3={certificate3} />
            <Contact github={github} linkedin={linkedin} phone={phone} mail={mail} />
          </div>}
        </div>
      </div>
    );
  }
}


export default SideBar;
