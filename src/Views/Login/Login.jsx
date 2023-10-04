import React, { Component } from 'react';
import './Login.css';
import LoginView from './View/LoginView';
import AppComponentDiv from '../../Components/AppComponentDiv/AppComponent';


class Login extends Component {
 
  render() {
    return (
      <div className='login'>
        <AppComponentDiv element = {<LoginView/> } />
      </div>
    );
  }
}

export default Login;