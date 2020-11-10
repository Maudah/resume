import React, { Component } from 'react';
import './style.css';
import { HashLink } from "react-router-hash-link";

import home from '../../images/house-32.ico'
import about from '../../images/businesswoman-32.ico'
import portfolio from '../../images/Portfolio-32.ico'
import certificates from '../../images/pages-1-32.ico'
import contact from '../../images/phone-20-32.ico'

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
            <HashLink style={{ textDecoration: 'none' }} to="/#HomeSection" smooth><img src={home} alt="home" /></HashLink>
          </div>
          <div className='slider-item'>
            <HashLink style={{ textDecoration: 'none' }} to="/#AboutSection" smooth><img src={about} alt="about" /></HashLink>
          </div>
          <div className='slider-item'>
            <HashLink style={{ textDecoration: 'none' }} to="/#PortfolioSection" smooth><img src={portfolio} alt="portfolio" /></HashLink>
          </div>
          <div className='slider-item'>
            <HashLink style={{ textDecoration: 'none' }} to="/#CertificatesSection" smooth><img src={certificates} alt="certificates" /></HashLink>
          </div>
          <div className='slider-item'>
            <HashLink style={{ textDecoration: 'none' }} to="/#ContactSection" smooth><img src={contact} alt="contact" /></HashLink>
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
