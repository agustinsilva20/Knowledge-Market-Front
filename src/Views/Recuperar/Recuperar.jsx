import React, { Component } from 'react';
import RecuperarView from './View/RecuperarView';
import AppComponentDiv from '../../Components/AppComponentDiv/AppComponent';


class Recuperar extends Component {
 
  render() {
    return (
      <div className='login'>
        <AppComponentDiv element = {<RecuperarView/> } />
      </div>
    );
  }
}

export default Recuperar;