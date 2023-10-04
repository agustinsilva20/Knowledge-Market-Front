import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  render() {
    const { opciones, handleChange } = this.props;



    return (
      <select onChange={handleChange} className="custom-select"> 
        {opciones.map((opcion, index) => (
          <option key={index} value={opcion.value}>{opcion.label}</option>
        ))}
      </select>
    );
  }
}

export default Dropdown;