import React, { Component } from 'react';
import './AppComponentDiv.css';

class AppComponentDiv extends Component {
  
  render() {
    return (
      <div className='AppComponentDiv'>
        {this.props.element}
      </div>
    );
  }
}

export default AppComponentDiv;