import React, { Component } from 'react';

import RegistroView from './View/RegistroView';
import AppComponentDiv from '../../Components/AppComponentDiv/AppComponent';


class Registro extends Component {
 
  render() {
    return (
      <div className='login'>
        <AppComponentDiv element = {<RegistroView/> } />
      </div>
    );
  }
}

export default Registro;