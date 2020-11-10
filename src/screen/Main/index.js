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

class SideBar extends Component {
  render() {
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
          <Home />
          <About />
          <Portfolio />
          <Certificates/>
          <Contact/>
        </div>
      </div>
    );
  }
}


export default SideBar;
