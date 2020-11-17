import React, { Component } from "react";
import './style.css';
const SparkPost = require('sparkpost');
const client = new SparkPost('eb2e6f9165f89812516dd10aec5f8bd0b86e2820');

export default class Contact extends Component {
  state = {
    sideNavLeft: false,
    // name: '',
    // email: '',
    // message: ''
  }
  send() {
    client.transmissions.send({
      options: {
        sandbox: true
      },
      content: {
        from: 'testing@sparkpostbox.com',
        subject: 'Hello, World!',
        html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
      },
      recipients: [
        {address: 'lital.maudah@gmail.com'}
      ]
    })
    .then(data => {
      console.log('Woohoo! You just sent your first mailing!');
      console.log(data);
    })
    .catch(err => {
      console.log('Whoops! Something went wrong');
      console.log(err);
    });
  }
  // encode = (data) => {
  //   return Object.keys(data)
  //     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //     .join("&");
  // }

  // handleSubmit = e => {
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: this.encode({ "form-name": "Contact", ...this.state })
  //   })
  //     .then(() => alert("Success!"))
  //     .catch(error => alert(error));

  //   e.preventDefault();
  // };
  // handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { github, linkedin, phone, mail } = this.props;
    // const { name, email, message } = this.state;
    // var __html = require('./template.html');
    // var template = { __html: __html };
    return (
      <div className='contact-page-container' id='ContactSection'>
        <div className="contact-page-text-content">
          <h1 className='contact-page-header-text'>Contact me</h1>
          
          {/* <form onSubmit={this.handleSubmit}>
            <p>
              <label>
                Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" value={message} onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form> */}
          {/* <div dangerouslySetInnerHTML={template} /> */}
          <button onClick={this.send} title={'lll'}/>
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

