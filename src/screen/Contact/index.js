import React, { Component } from "react";
import './style.css';
import SendEmail from '../sendEmail'

export default class Contact extends Component {
  state = {
    sideNavLeft: false,
  }

  render() {
    const { github, linkedin, phone, mail } = this.props;
    const my_src = 'https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyAxpA-bcFvFMf5aCZom3k4Gi1ClfuKoOAQ&center=31.4260396137113,35.081815550000016&zoom=7&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:geometry.fill%7Ccolor:0xffeb3b%7Cvisibility:on&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.land_parcel%7Celement:geometry.fill%7Ccolor:0xffeb3b%7Cvisibility:on&style=feature:administrative.locality%7Celement:geometry.fill%7Ccolor:0xffeb3b%7Cvisibility:on&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:administrative.neighborhood%7Celement:geometry.fill%7Ccolor:0xffeb3b%7Cvisibility:on&style=feature:administrative.province%7Celement:geometry.fill%7Ccolor:0xffeb3b%7Cvisibility:on&style=feature:landscape.man_made%7Celement:geometry.fill%7Cvisibility:on&style=feature:landscape.natural%7Celement:geometry.fill%7Ccolor:0xffc0cb%7Cvisibility:on&style=feature:landscape.natural%7Celement:geometry.stroke%7Ccolor:0xffeb3b%7Cvisibility:on&style=feature:landscape.natural.landcover%7Celement:geometry.fill%7Ccolor:0xffeb3b%7Cvisibility:on&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d&size=480x360'
    return (
      <div className='contact-page-container' id='ContactSection'>
        <div className="contact-page-text-content">
          <h1 className='contact-page-header-text'>Contact me</h1>
          <div className='contact-page-map-form'>
            <SendEmail />
            <img src={this.props.map} alt="map" className='map-photo' />
          </div>
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

