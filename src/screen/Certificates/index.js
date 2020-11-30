import React, { Component } from "react";
import './style.css';



export default class Certificates extends Component {
  render() {
    const {certificate3, certificate4}=this.props;
    return (
      <div className='certificates-page-container' id='CertificatesSection'>
        <div className="certificates-page-text-content">
          <h1 className='certificates-page-header-text'>Certificates</h1>
          <div className='certificates-content'>
            <img id='slide4' src={certificate3} alt="certificate3" className='certificates-photo' />
            <img id='slide5' src={certificate4} alt="certificate1" className='certificates-photo' />
            {/* <img id='slide5' src={certificate2} alt="certificate2" className='certificates-photo' /> */}
            {/* <img id='slide7' src={certificate4} alt="certificate4" className='certificates-photo' /> */}
          </div>
        </div>
      </div>
    );
  }
}

