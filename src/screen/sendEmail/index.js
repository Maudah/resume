import React, { Component } from "react";
import './style.css';
import * as emailjs from 'emailjs-com'
import FormControl from "@material-ui/core/FormControl"
export default class Temp extends Component {
  constructor() {
    super();
    this.state = { name: '', email: '', message: '', sent: false, buttonText: 'Send email', err: '' }
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  resetForm() {
    this.setState({ name: '', email: '', message: '', sent: false, buttonText: 'Send email', err: '' })
  }
  formSubmit = (e) => {
    e.preventDefault();
    this.setState({
      buttonText: 'Sending...'
    })
    const name = 'Lital'
    const email = 'lital.maudah@gmail.com'
    // const message =  document.getElementById('root').innerHTML
    const message = this.state.message
    let templateParams = {
      to_name: name,
      to_email: email,
      reply_to: this.state.email,
      message: message,
      from_name: this.state.name
    }
    emailjs.init('user_WsS0WKeLjgVyvvbr1OZwo');
    emailjs.send(
      'service_wkv211w',
      'template_bampdel',
      templateParams
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.setState({ buttonText: 'Sent' })
      }, (error) => {
        this.setState({ buttonText: 'Failed to send' })
        console.log('FAILED...', error);
      });
  }
  render() {
    const { name, email, message, buttonText } = this.state;
    return (
      <view className='send-email-container'>
        <FormControl fullWidth={true}>
          <input required placeholder="Full name" id="full-name" name="name" className="form-field" value={name} onChange={this.handleChange} />
        </FormControl>
        <FormControl fullWidth={true}>
          <input required placeholder="Email" id="email" name="email" className="form-field" value={email} onChange={this.handleChange} />
        </FormControl>
        <FormControl fullWidth={true}>
          <textarea style={{ color: 'white' }} required placeholder="Message" name="message" className="form-field" multiline={true} rows="10" value={message} onChange={this.handleChange} />
        </FormControl>
        <FormControl style={{ paddingTop: 15 }}>
          <button style={{ backgroundColor: '#141414', borderWidth: 2, borderColor: '#FFC0CB', borderRadius: 0 }} onClick={this.formSubmit}>
            <label style={{ color: 'white', margin: 0, paddingRight: 10, paddingLeft: 10, paddingTop: 3, paddingBottom: 3 }}>{buttonText}</label>
          </button>
        </FormControl>
      </view>
    )
  }
}

