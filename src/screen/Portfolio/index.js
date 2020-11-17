import React, { Component } from "react";
import './style.css'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {
  render() {
    const{Simulator, Motors, Missible,  RTOS , WeatherApp} = this.props;
    return (
      <div id='PortfolioSection' className='portfolio-page-container'>
        <div className="portfolio-page-text-content">
          <h1 className='portfolio-page-header-text'>Portfolio</h1>
          <div className='slide-content'>
            <Carousel>

              <Carousel.Item>
                <div className='slide-item-content'>
                  <img
                    className="portfolio-image"
                    src={Simulator}
                    alt="First slide"
                  />
                  <div className='slide-text'>
                    <h4>Simulating the transmit of telematics data from vehicles to a central server.</h4>
                    <p style={{ paddingTop: '20px' }} className='portfolio-page-content-text'>The project aim is to develop a cross-platform application called AutoSim that simulates telematic data traffic with or without incident that comes from a vehicle to a central server. </p>
                    <p style={{ paddingTop: '20px' }} className='portfolio-page-content-text'>React-Native | TypeScript | Redux | GoogleMaps API</p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className='slide-item-content'>
                  <img
                  className="portfolio-image"
                    src={Motors}
                    alt="First slide"
                  />
                  <div className='slide-text'>
                    <h4>Website for the sale of luxury vehicles</h4>
                    <p style={{ paddingTop: '20px' }} className='portfolio-page-content-text'>The project aim is to develop a fullstack project </p>
                    <p style={{ paddingTop: '20px' }} className='portfolio-page-content-text'>Node.js | MongoDB | React | JavaScript | Redux | Socket.io | Passport | Nodemailer | Session | Cookie</p>
                    <a className='git' href="https://github.com/Maudah/Luxury_Motors">The code on Git</a>

                  </div>
                </div>
              </Carousel.Item>


              <Carousel.Item>
                <div className='slide-item-content'>
                  <img
                  className="portfolio-image"
                    src={Missible}
                    alt="First slide"
                  />
                  <div className='slide-text'>
                    <h4>Prediction missile fall</h4>
                    <p style={{ paddingTop: '20px' }} className='portfolio-page-content-text'>This project simulates emergency telephone service center.
                    Civilians call the center when they hear "Boom" as a result of missile fall.
                    Every 10 minutes is one period of time, all the reports in these 10 minutes are referred to the same fall (there is only 1 fall in 10 minutes).

                    The black pin is where the real fall location is.
                    The red pin is the reports.
The blue pin is where the k-means algorithm calculate the estimated fall location.</p>
                    <p style={{ paddingTop: '20px' }} className='portfolio-page-content-text'>WPF | GoogleMaps | Visual-Studio | Commads | MVVM</p>
                    <a className='git' href="https://github.com/Maudah/Prediction_missile_fall">The code on Git</a>

                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className='slide-item-content'>
                  <img
                  className="portfolio-image"
                    src={RTOS}
                    alt="First slide"
                  />
                  <div className='slide-text'>
                    <h4>Real-time</h4>
                    <p style={{ paddingTop: '20px' }} className='portfolio-page-content-text'>First Part- A system for synchronizing traffic lights systems in a complicated crossroads.</p>
                    <a className='git' href="https://github.com/Maudah/Traffic_lights_system">First part on Git</a>
                    <p style={{ paddingTop: '20px' }} className='portfolio-page-content-text'>Second Part- Implemantation part of RTOS.</p>
                    <a className='git' href="https://github.com/Maudah/Real-Time">Second part on Git</a>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className='slide-item-content'>
                  <img
                  className="portfolio-image"
                    src={WeatherApp}
                    alt="First slide"
                  />
                  <div className='slide-text'>
                    <h4>Weather App</h4>
                    <p style={{ paddingTop: '20px' }} className='portfolio-page-content-text'>This project Display a 5-day weather forecast based on the current user location by using OpenWeatherMap API to fetch weather data.</p>
                    <p style={{ paddingTop: '20px' }} className='portfolio-page-content-text'>React-Native | JavaScript | EXPO | OpenWeatherMap  API</p>
                    <a className='git' href="https://github.com/Maudah/React-Native-WeatherApp">The code on Git</a>

                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

