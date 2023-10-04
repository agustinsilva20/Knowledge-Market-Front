import React, { Component } from 'react';
import './Input.css';

class Input extends Component {

  render() {
    return (
      
           <input type={this.props.type} value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.onChange} className='Input'/> 
      
    );
  }
}

export default Input;