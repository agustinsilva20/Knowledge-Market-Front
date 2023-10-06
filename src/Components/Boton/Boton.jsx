import React, { Component } from 'react';
import './Boton.css';

class Boton extends Component {

  render() {
    const combinedClass = `boton ${this.props.estilo}`;
    return (
      <div className={combinedClass} onClick={this.props.handleClick} text = {this.props.text}>
            {this.props.text}  
      </div>
    );
  }
}

export default Boton;