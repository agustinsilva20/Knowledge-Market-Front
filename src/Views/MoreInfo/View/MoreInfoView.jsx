import React, { Component } from 'react';
import Boton from '../../../Components/Boton/Boton';
import Input from '../../../Components/Input/Input';

class MoreInfoView extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          tituloInput: '',
          experienciaInput: '',

          

        };
      }

    
      tituloInput_handleChange = (event) => {
        this.setState({ tituloInput: event.target.value });
      };
      experienciaInput_handleChange = (event) => {
        this.setState({ experienciaInput: event.target.value });
      };


      registrarse_action = () => {
        let tituloInput = this.state.tituloInput
        let experienciaInput =this.state.experienciaInput


        if (tituloInput == ""){
            this.setState({ error: "Error: Debes ingresar un Titulo." })
        }

        else if (experienciaInput == ""){
            this.setState({ error: "Error: Debes ingresar tu Experiencia." })
        }
      
        
        else{
            this.setState({ error: "" })
            window.location.replace("/anuncios")
            
        }
       
      }

    

    render() {
  
  
      return (
        <div className='LoginView'>
          <h2>¡Ya casi estas!</h2>

          
          <form action="" className='centrar form-login'>
            <Input value={this.state.tituloInput} onChange={this.tituloInput_handleChange} placeholder="Titulo profesional" type="text"/>
            <Input value={this.state.experienciaInput} onChange={this.experienciaInput_handleChange} placeholder="Experiencia" type="email"/>
            <p className='Error-text'>{this.state.error}</p>
          </form>
            
          <div className='centrar btn-login'>
            <Boton text="Comenzar" handleClick = {this.registrarse_action}/>
          </div>

        </div>
      );
    }
  }
  
  export default MoreInfoView;