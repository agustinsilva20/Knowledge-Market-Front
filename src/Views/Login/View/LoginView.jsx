import React, { Component } from 'react';
import './LoginView.css';
import Boton from '../../../Components/Boton/Boton';
import Input from '../../../Components/Input/Input';

// Importo endpoint
import {login} from "../../../Controller/login.controller";
import {Redirect} from "react-router-dom";


class LoginView extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          correoInput: '',
          passwordInput: '',
          error:''

        };
      }
    
      correo_handleChange = (event) => {
        this.setState({ correoInput: event.target.value });
      };
      password_handleChange = (event) => {
        this.setState({ passwordInput: event.target.value });
      };



      iniciar_sesion = async () => {

        let dto = {
          correo: this.state.correoInput,
          password: this.state.passwordInput
        }

        if (dto.correo != "" && dto.password != "")
        {
          this.setState({error: ""});
          let response = await login(dto);

          if (response.rdo === 1)
          {
              this.setState({error: response.message});
          }
          else{
             this.setState({error: "Cuenta valida redirigiendo"})
             this.redirect();
          }
    
        }
        else
        {
          console.log("asd")
          this.setState({error: "Debe completar mail y password"});
        }
        
      }

      redirect= ()=>{
          window.location.replace("/anuncios")
      } 

    

    render() {
  
      
      

  
      return (
        <div className='LoginView'>
          <h2>Iniciar Sesion</h2>

          
          <form action="" className='centrar form-login'>
            <Input value={this.state.userInput} onChange={this.correo_handleChange} placeholder="Correo Electronico" type="email"/>
            <Input value={this.state.passwordInput} onChange={this.password_handleChange} placeholder="Contraseña" type="password"/>
            <p>{this.state.error}</p>
          </form>

          <div className='centrar btn-login'>
            <a onClick={this.iniciar_sesion}><Boton text="Iniciar Sesion"/></a>
          </div>

          <h5>¿Sos nuevo? <span><a href="/registro">Registrate</a></span> y publica tus servicios</h5>
          <h5>¿Olvidaste tu contrasena? <span><a href="/recuperar">Recuperala</a></span></h5>
          
  
  
        </div>
      );
    }
  }
  
  export default LoginView;