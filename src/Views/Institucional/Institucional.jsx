import React, { Component } from 'react';
import './Institucional.css';
import AppComponentDiv from '../../Components/AppComponentDiv/AppComponent';
import InstitucionalView from './View/InstitucionalView';

class Institucional extends Component {
 
  render() {
    return (
      <div className='institucional'>
        <AppComponentDiv element = {<InstitucionalView handleSelectChange={this.props.handleSelectChange} selectedOption={this.props.selectedOption}/> } />
      </div>
    );
  }
}

export default Institucional;