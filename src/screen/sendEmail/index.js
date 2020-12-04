import React, { Component } from "react";
import axios from 'axios'
import './style.css';

// import Button from "@material-ui/core/Button"
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
    const { name, email, message, sent, buttonText, err } = this.state;
    const data = { name, email, message, sent, buttonText, err };
    axios.post('/api/sendmail', data)
      .then(res => {
        if (res.data.result !== 'success') {
          this.setState({
            ...data,
            buttonText: 'Failed to send',
            sent: false,
            err: 'fail'
          })
          setTimeout(() => {
            this.resetForm()
          }, 6000)
        } else {
          this.setState({
            sent: true,
            buttonText: 'Sent',
            err: 'success'
          })
          setTimeout(() => {
            this.resetForm();
          }, 6000)
        }
      }).catch((err) => {
        this.setState({
          buttonText: 'Failed to send',
          err: 'fail'
        })

      })
  }
  render() {
    const { name, email, message, buttonText } = this.state;
    return (
      <view className='send-email-container'>
        <FormControl fullWidth={true}>
          <input required placeholder="Full name"  id="full-name" name="name" className="form-field" value={name} onChange={this.handleChange} />
        </FormControl>        
        <FormControl fullWidth={true}>
          <input required placeholder="Email" id="email" name="email" className="form-field" value={email} onChange={this.handleChange} />
        </FormControl>
        <FormControl fullWidth={true}>
          <textarea required placeholder="Message" name="message" className="form-field" multiline={true} rows="10" value={message} onChange={this.handleChange} />
        </FormControl>
        <FormControl style={{ paddingTop: 15 }}>
          <button style={{ backgroundColor: '#141414' , borderWidth: 2, borderColor: '#FFC0CB', borderRadius: 0}} onClick={this.formSubmit}>
            <label style={{color:'white', margin: 0, paddingRight: 10, paddingLeft: 10, paddingTop: 3, paddingBottom: 3}}>{buttonText}</label>
            </button>
        </FormControl>
      </view>
    )
  }
}

