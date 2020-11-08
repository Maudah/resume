import React, { Component } from "react";
import About from '../About/index'
import Home from '../Home/index'

export default class All extends Component {
  state = {
    sideNavLeft: false,
  }
  render() {
    return (<div style={{ height: '200vh', position: 'absolute' }}>
            <Home/>
            <About/>
            <About/>
            <About/>
            <About/>
    </div>);
  }
}

