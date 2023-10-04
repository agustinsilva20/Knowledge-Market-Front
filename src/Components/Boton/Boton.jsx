import React, { Component } from 'react';
import './Boton.css';

class Boton extends Component {

  render() {
    return (
      <div className='boton' onClick={this.props.handleClick} text = {this.props.text}>
            {this.props.text}  
      </div>
    );
  }
}

export default Boton;