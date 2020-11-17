import React, { Component } from "react";
import axios from 'axios'

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
export default class Temp extends Component {
  constructor() {
    super();
    this.state = { name: '', email: '', message: '', sent: false, buttonText: 'Submit', err: '' }
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  resetForm(){
    this.setState({ name: '', email: '', message: '', sent: false, buttonText: 'Submit', err: '' })
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
    const { name, email, message, sent, buttonText, err } = this.state;
    return (
      <>
        <FormControl fullWidth={true}>
          <TextField required label="Full name" variant="filled" id="full-name" name="name" className="form-field" value={name} onChange={this.handleChange} />
        </FormControl>
        <FormControl fullWidth={true}>
          <TextField required label="Email" id="email" name="email" variant="filled" className="form-field" value={email} onChange={this.handleChange} />
        </FormControl>
        <FormControl fullWidth={true}>
          <TextField required label="Message" variant="filled" name="message" multiline={true} rows="10" value={message} onChange={this.handleChange} />
        </FormControl>
        <FormControl>
          <div className="form-submit">
          <Button variant="contained" color="primary" onClick={this.formSubmit}>{buttonText}</Button>
          </div>
        </FormControl>
      </>
    )
  }
}

