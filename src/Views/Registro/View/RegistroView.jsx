import React, { Component } from 'react';

import Boton from '../../../Components/Boton/Boton';
import Input from '../../../Components/Input/Input';

// Importo endpoint
import {register} from "../../../Controller/login.controller";

class LoginView extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          userInput: '',
          passwordInput: '',
          password2Input: '',
          correo:'',
          telefono:'',

          error:''

          

        };
      }
    
      user_handleChange = (event) => {
        this.setState({ userInput: event.target.value });
      };
      password_handleChange = (event) => {
        this.setState({ passwordInput: event.target.value });
      };
      password2_handleChange = (event) => {
        this.setState({ password2Input: event.target.value });
      };
      correo_handleChange = (event) => {
        this.setState({ correo: event.target.value });
      };
      telefono_handleChange = (event) => {
        this.setState({ telefono: event.target.value });
      };

      registrarse_action = () => {
        let nombre = this.state.userInput
        let password =this.state.passwordInput
        let password2 =this.state.password2Input
        let correo =this.state.correo
        let telefono =this.state.telefono
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telefonoRegex = /^\d{8,}$/;

        if (nombre == ""){
            this.setState({ error: "Error: El nombre no puede estar vacio." })
        }

        else if (regexCorreo.test(correo) == false){
            this.setState({ error: "Error: El correo ingresado no es valido." })
        }
      
        else if (telefonoRegex.test(telefono) == false){
            this.setState({ error: "Error: El telefono debe tener al menos 8 caracteres y deben ser todos numeros" })
        }
        else if (password == ""){
            this.setState({ error: "Error: La contrasena no puede estar vacia." })
        }
    
        else if (password != password2){
            this.setState({ error: "Error: Las contrasenas deben coincidir." })
        }
        
      
       
      }
    
      register = async () => {
        this.registrarse_action()
        let dto = {
          nombre: this.state.userInput,
          correo: this.state.correo,
          telefono: this.state.telefono,
          password:this.state.passwordInput,
          password2:this.state.password2Input
        }

        console.log(dto)

        if (dto.nombre != "" && dto.correo != "" && dto.telefono != "" && dto.password != "" && dto.password2 != "")
        {
          this.setState({error: ""});
          let response = await register(dto);

          if (response.rdo === 1)
          {
              this.setState({error: response.message});
          }
          else{
             this.setState({error: ""})
             this.redirect();
          }
    
        }
       
        
      }

      redirect= ()=>{
          window.location.replace("/moreinfo")
      } 
    

    render() {
  
  
      return (
        <div className='LoginView'>
          <h2>Registrarse</h2>

          
          <form action="" className='centrar form-login'>
            <Input value={this.state.userInput} onChange={this.user_handleChange} placeholder="Nombre Completo" type="text"/>
            <Input value={this.state.correo} onChange={this.correo_handleChange} placeholder="Correo Electronico" type="email"/>
            <Input value={this.state.telefono} onChange={this.telefono_handleChange} placeholder="Telefono" type="phone"/>
            <Input value={this.state.passwordInput} onChange={this.password_handleChange} placeholder="Contraseña" type="password"/>
            <Input value={this.state.passwordInput2} onChange={this.password2_handleChange} placeholder="Repetir Contraseña" type="password"/>
            <p className='Error-text'>{this.state.error}</p>
          </form>
            
          <div className='centrar btn-login'>
            <Boton text="Registrarse" handleClick = {this.register}/>
          </div>

          <h5>¿Ya tenes cuenta? <span><a href="/login">Inicia Sesion</a></span></h5>
          
  
  
        </div>
      );
    }
  }
  
  export default LoginView;