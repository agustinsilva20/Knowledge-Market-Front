import React, { Component } from 'react';
import './InstitucionalView.css';

import Dropdown from "../../../Components/Dropdown/Dropdown";
import Boton from '../../../Components/Boton/Boton';

class InstitucionalView extends Component {
  buscar_cursos = () => {
    window.location.replace("/anuncios")
    
  }
  render() {


    return (
      <div className='InstitucionalView'>
        <h2>¿Necesitas clases particulares?</h2>
        <h3>Te ofrecemos los mejores profesores</h3>
        <p className='quiensomos'>Knowledge Market es la mejor plataforma gratuita para encontrar un profesor particular que te ayude a estudiar y preparar examenes. Nuestros docentes son los mejores en todo el mundo  </p>
        <div className='space'></div>
        
        
        
        
        <div className='space'></div>
        
        <div className='spacebtw'>
              <div className='comenzar'>
                      <h4>¿Que esperas para <span>Comenzar</span>? </h4>
                <br />
                <div className='btn-institucional-buscar'>
                  
                <Boton text="Buscar profesores"  handleClick = {this.buscar_cursos}/>
                </div>
              </div>
              <div className='notengocuenta'>
              <h4>¿Deseas ofrecer tus servicios?</h4>
              <div className='btn-institucional-registro'>
          <a href="/registro"><Boton text="Registrate"/></a>
        </div>
        <h5>¿Ya estas registrado? <a href="/login"><span>Ingresa a tu cuenta</span></a></h5>
              </div>
        </div>
       
        


      </div>
    );
  }
}

export default InstitucionalView;