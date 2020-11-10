import React, { Component } from "react";
import './style.css';
import certificate1 from "../../images/certificate1.jpg";
import certificate2 from "../../images/certificate2.jpg";
import certificate3 from "../../images/certificate3.jpg";


export default class Certificates extends Component {
  render() {
    return (
      <div className='certificates-page-container' id='CertificatesSection'>
        <div className="certificates-page-text-content">
          <h1 className='certificates-page-header-text'>Certificates</h1>
          <div className='certificates-content'>
            <img id='slide6' src={certificate3} alt="certificate3" className='certificates-photo' />
            <img id='slide4' src={certificate1} alt="certificate1" className='certificates-photo' />
            <img id='slide5' src={certificate2} alt="certificate2" className='certificates-photo' />
          </div>
        </div>
      </div>
    );
  }
}

