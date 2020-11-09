import React, { Component } from "react";
import './style.css';
import mePhoto from "../../images/me.jpg";


export default class About extends Component {
  state = {
    sideNavLeft: false,
  }
  // componentDidMount() {
  //   let UID = {
  //     _current: 0,
  //     getNew: function(){
  //       this._current++;
  //       return this._current;
  //     }
  //   };

  // HTMLElement.prototype.pseudoStyle = function(element,prop,value){
  //   var _this = this;
  //   var _sheetId = "pseudoStyles";
  //   var _head = document.head || document.getElementsByTagName('head')[0];
  //   var _sheet = document.getElementById(_sheetId) || document.createElement('style');
  //   _sheet.id = _sheetId;
  //   var className = "pseudoStyle" + UID.getNew();

  //   _this.className +=  " "+className; 
  //   console.log('--------');
  //   console.log(_sheet);

  //   _sheet.innerHTML += " ."+className+":"+element+"{"+prop+":"+"url('../../images/github-10-32.ico')"+"}";
  //   console.log(_sheet);
  //   _head.appendChild(_sheet);
  //   return this;
  // };
  //   var div = document.getElementById("testDiv");
  //   div.pseudoStyle("before", "content", "url('../../images/about-32.ico')");
  // }


  render() {
    return (
      <div className='about-page-container' id='AboutSection'>
        <div className="about-page-text-content">
          <h1 className='about-page-header-text'>About me</h1>
          <p id='slide3' className='about-page-content-text'>Infrastructures and DevOps engineer at CEVA .Inc</p>
          <p id='slide3' className='about-page-content-text'>Graduated with honors of B.Sc. in software engineering at JCT.</p>
          <main className='timeline-content'>
            <img src={mePhoto} alt="me" className='me-photo' />
            <div className='padding-timeline'>
              <p className='timeline' id='jct-icon'>B.Sc. in software  engineering </p>
              <p className='timeline' id='microsoft-icon'>Hackathon with cooperation with Microsoft: developing a system that predicts the chance to get ill
diabetes type 2 by behavioral symptoms.</p>
              <p className='timeline' id='upstream-icon'>Fontend developer- The product, C4, detects cybersecurity issues and other abnormal behaviors of the client’s vehicles.
Developed a professional simulation tool</p>
              <p className='timeline' id='ceva-icon'>Infrastructures and DevOps engineering </p>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

