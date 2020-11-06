import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import home from '../../images/house-32.ico'
import about from '../../images/about-32.ico'

class SideBar extends Component {

  render() {
    return (
      <div className='slide-bar'>
        <div>
          <div style={{padding: '5px'}}>
            <Link style={{ textDecoration: 'none' }} to='/'><img src={home} alt="Logo" /></Link>
          </div>
          <div style={{padding: '5px'}}>
            <Link style={{ textDecoration: 'none' }} to='/about'><img src={about} alt="Logo" /></Link>
          </div>
        </div>
      </div>
    );
  }
}


export default SideBar;
