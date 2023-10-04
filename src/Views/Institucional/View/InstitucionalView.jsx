import React, { Component } from 'react';
import './InstitucionalView.css';

import Dropdown from "../../../Components/Dropdown/Dropdown";
import Boton from '../../../Components/Boton/Boton';

class Institucional extends Component {
  
  render() {

    const opciones = [
      { value: 'ALL', label: 'Todas las categorias' },
      { value: 'MUSICA', label: 'Musica' },
      { value: 'MATEMATICA', label: 'Matematica' }
    ];

    



    return (
      <div className='InstitucionalView'>
        <h2>¿Necesitas clases particulares?</h2>
        <h3>Encontra acá todo lo que buscas</h3>
        <div className='space'></div>
        <Dropdown opciones={opciones} handleChange={this.props.handleSelectChange} />
        <div className='space'></div>
        <h4>¿Deseas ofrecer tus servicios?</h4>
        <div className='btn-institucional-registro'>
          <Boton text="Registrate"/>
        </div>
        <h5>¿Ya estas registrado? <span>Ingresa a tu cuenta</span></h5>
        <br />
        


      </div>
    );
  }
}

export default Institucional;