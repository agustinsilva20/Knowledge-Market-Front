import React, { Component } from 'react';

import MoreInfoView from './View/MoreInfoView';
import AppComponentDiv from '../../Components/AppComponentDiv/AppComponent';


class MoreInfo extends Component {
 
  render() {
    return (
      <div className='login'>
        <AppComponentDiv element = {<MoreInfoView/> } />
      </div>
    );
  }
}

export default MoreInfo;