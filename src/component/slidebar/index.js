import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import home from '../../images/house-32.ico'
import about from '../../images/about-32.ico'
import github from '../../images/github-10-32.ico'
import linkedin from '../../images/linkedin-3-32.ico'

class SideBar extends Component {

  render() {
    return (
      <div className='slide-bar'>
          <div style={{padding: '12px'}}>
            <Link style={{ textDecoration: 'none' }} to='/'><img src={home} alt="home" /></Link>
          </div>
          <div style={{padding: '12px'}}>
            <Link style={{ textDecoration: 'none' }} to='/about'><img src={about} alt="about" /></Link>
          </div>
          <div style={{padding: '12px'}}>
            <Link style={{ textDecoration: 'none' }} to='/github'><img src={github} alt="github" /></Link>
          </div>
          <div style={{padding: '12px'}}>
          <Link style={{ textDecoration: 'none' }} to='/linkdin'><img src={linkedin} alt="likdin" /></Link>
        </div>
      </div>
    );
  }
}


export default SideBar;
