import React, { Component } from 'react';
import './LoginView.css';
import Boton from '../../../Components/Boton/Boton';
import Input from '../../../Components/Input/Input';

class LoginView extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          userInput: '',
          passwordInput: '',

        };
      }
    
      user_handleChange = (event) => {
        this.setState({ userInput: event.target.value });
      };
      password_handleChange = (event) => {
        this.setState({ passwordInput: event.target.value });
      };
    

    render() {
  
      
      

  
      return (
        <div className='LoginView'>
          <h2>Iniciar Sesion</h2>

          
          <form action="" className='centrar form-login'>
            <Input value={this.state.userInput} onChange={this.user_handleChange} placeholder="Usuario" type="text"/>
            <Input value={this.state.passwordInput} onChange={this.password_handleChange} placeholder="Contraseña" type="password"/>
          </form>

          <div className='centrar btn-login'>
            <Boton text="Iniciar Sesion"/>
          </div>

          <h5>¿Sos nuevo? <span>Registrate</span> y publica tus servicios</h5>
          
  
  
        </div>
      );
    }
  }
  
  export default LoginView;