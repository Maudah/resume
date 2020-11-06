import React, {Component} from 'react';
import SideBar from '../slidebar/index';

const DrawerToggleButton = props => (
  <button className='toggle-button' onClick={props.click}>
    <div className='toggle-button-line'></div>
    <div className='toggle-button-line'></div>
    <div className='toggle-button-line'></div>
  </button>
);

class DrawerToggleButtonBind extends Component{
  constructor(props){
    super(props);

    this.state = {
      message: true
     }
  }

  buttonToggle(){
    this.setState({
      message: !this.state.message
    })
  }

  render(){
    return(
      <div className="DrawerToggleBind">
        <button className='toggle-button' onClick = { () => this.buttonToggle()} >
          <div className='toggle-button-line'></div>
          <div className='toggle-button-line'></div>
          <div className='toggle-button-line'></div>
        </button>
        {this.state.message ? <div><SideBar/></div>: null}
      </div>
   )
  }
}

export default DrawerToggleButtonBind;