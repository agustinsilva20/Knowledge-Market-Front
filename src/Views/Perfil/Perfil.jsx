import React, { Component } from 'react';

import PerfilView from './View/PerfilView';
import AppComponentDiv from '../../Components/AppComponentDiv/AppComponent';


class Perfil extends Component {

  render() {

    
    return (
      <div className='login'>
        <AppComponentDiv element = {<PerfilView setModal={this.props.setModal}/> } />
        
      </div>
      
    );
  }
}

export default Perfil;