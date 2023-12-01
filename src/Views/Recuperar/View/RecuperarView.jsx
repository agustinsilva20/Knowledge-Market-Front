import React, { Component } from 'react';

import Boton from '../../../Components/Boton/Boton';
import Input from '../../../Components/Input/Input';

import {recuperar, recuperarDos} from '../../../Controller/login.controller';

class RecuperarView extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          correoInput: '',
          pinInput: '',
          showing:"mail",
          error:"",
          sendCorreo:'',
          passwordInput:''
        };
      }
    
      correo_handleChange = (event) => {
        this.setState({ correoInput: event.target.value });
      };
      pin_handleChange = (event) => {
        this.setState({ pinInput: event.target.value });
      };
      password_handleChange = (event) => {
        this.setState({ passwordInput: event.target.value });
      };

      validar_correo = async () => {
          const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (regexCorreo.test(this.state.correoInput) == false){
            this.setState({ error: "Error: El correo ingresado no es valido." })
          }
          else{
            //this.setState({ error: "" })
            let answer = await recuperar(this.state.correoInput)
            
            if (answer.rdo == 0){
              this.setState({ error: "" })
              this.setState({ sendCorreo: this.state.correoInput })
              this.setState({ showing: "pin" })
            }
            else{
              this.setState({ error: answer.message })
            }
            
          }
      };

      validar_pin = async () => {
       
        if ((this.state.pinInput) == ""){
          this.setState({ error: "Error: El PIN no puede estar vacio" })
        }
        else{
          this.setState({ error: "" })
          let dto = {
            correo: this.state.sendCorreo,
            codigo: this.state.pinInput,
            password: this.state.passwordInput
          }
          let answer = await recuperarDos(dto)
          if (answer.rdo == 0){
            this.setState({ error: "" })
            window.location.replace("/anuncios")
          }
          else{
            this.setState({ error: answer.message })
          }
          
        }
    };

    

    render() {
  
      const recuperar = (
        <div className='perfil-div'>
            <form action="" className='centrar form-login'>
            <Input value={this.state.userInput} onChange={this.correo_handleChange} placeholder="Correo Electronico" type="email"/>
          </form>

          <div className='centrar btn-login' onClick={this.validar_correo}>
            <Boton text="Recuperar"/>
            
          </div>
          <p className='Error-text'>{this.state.error}</p>
        </div>
      ); 

      const pin = (
        <div className='perfil-div'>
            <form action="" className='centrar form-login'>
            <p>Ingrese el PIN enviado a <span>{this.state.correoInput}</span></p>
            <Input value={this.state.userInput} onChange={this.pin_handleChange} placeholder="PIN" type="text"/>
            <Input value={this.state.passwordInput} onChange={this.password_handleChange} placeholder="Password" type="password"/>
            </form>

          <div className='centrar btn-login' onClick={this.validar_pin}>
            <Boton text="Recuperar"/>
            
          </div>
          <p className='Error-text'>{this.state.error}</p>
        </div>
      );
      

  
      return (
        <div className='LoginView'>
          <h2>Recuperar Cuenta</h2>
          {this.state.showing==="mail"?recuperar:pin}

          
          

  
          
  
  
        </div>
      );
    }
  }
  
  export default RecuperarView;