import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { HashLink } from "react-router-hash-link";

import home from '../../images/house-32.ico'
import about from '../../images/about-32.ico'
import github from '../../images/github-10-32.ico'
import linkedin from '../../images/linkedin-3-32.ico'

import About from '../../screen/About'
import Home from '../../screen/Home'
class SideBar extends Component {

  render() {
    return (
      <div className='App-container'>
        <div className='slide-bar'>
          <div style={{ padding: '12px' }}>
            <HashLink style={{ textDecoration: 'none' }} to="/#HomeSection" smooth><img src={home} alt="home" /></HashLink>
          </div>
          <div style={{ padding: '12px' }}>
            <HashLink style={{ textDecoration: 'none' }} to="/#AboutSection" smooth><img src={about} alt="about" /></HashLink>
          </div>
          <div style={{ padding: '12px' }}>
            <Link style={{ textDecoration: 'none' }} to='/github'><img src={github} alt="github" /></Link>
          </div>
          <div style={{ padding: '12px' }}>
            <Link style={{ textDecoration: 'none' }} to='/linkdin'><img src={linkedin} alt="likdin" /></Link>
          </div>
        </div>
        <div>
          <Home />
          <About />
        </div>
      </div>
    );
  }
}


export default SideBar;
