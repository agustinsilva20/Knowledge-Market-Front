import React, { Component } from 'react';
import './AnunciosView.css';

import Dropdown from "../../../Components/Dropdown/Dropdown";
import Card from "../../../Components/Card/Card";


class InstitucionalView extends Component {
  buscar_cursos = () => {
    window.location.replace("/anuncios")
    
  }
  render() {

    const opciones = [
      { value: 'ALL', label: 'Todas las categorias' },
      { value: 'MUSICA', label: 'Musica' },
      { value: 'MATEMATICA', label: 'Matematica' }
    ];

    const tipos = [
      { value: 'ALL', label: 'Todas los Tipos' },
      { value: 'PRESENCIAL', label: 'Presencial' },
      { value: 'VIRTUAL', label: 'Virtual' }
    ];

    const frecuencia = [
      { value: 'ALL', label: 'Todas los Frecuencias' },
      { value: 'UNA', label: '1 vez por semana' },
      { value: 'DOS', label: '2 veces por semana' },
      { value: 'TRES', label: '3 veces por semana' },
      { value: 'CUATRO', label: '4 veces por semana' },
      { value: 'CINCO', label: '5 veces por semana' },
    ];

    const calificacion = [
      { value: 'ALL', label: 'Todas los calificaciones' },
      { value: 'MENOS1', label: 'Menos de una estrella' },
      { value: 'MAS1', label: 'Mas de una estrella' },
      { value: 'MAS2', label: 'Mas de dos estrellas' },
      { value: 'MAS3', label: 'Mas de tres estrellas' },
      { value: 'MAS4', label: 'Mas de cuatro estrellas' },
      { value: 'MAS5', label: 'Mas de cinco estrellas' },
    ];


    return (
      <div className='InstitucionalView'>
        <h2>Elije tu Categoria</h2>
        <br />
        <div className='elegir-categoria'>
          <Dropdown opciones={opciones} handleChange={this.props.handleSelectChange} />
        </div>
        <div className='filtros'>
              <div className='elegir-filtro'>
                  <p className='filtro-text'>Filtrar x Tipo</p>
                  <Dropdown opciones={tipos} handleChange={this.props.handleTipoChange} />
              </div>
              <div className='elegir-filtro'>
                <p className='filtro-text'>Filtrar x Frecuencia</p>
                  <Dropdown opciones={frecuencia} handleChange={this.props.handleFrecuenciaChange} />
              </div>
              <div className='elegir-filtro'>
                <p className='filtro-text'>Filtrar x Calificacion</p>
                <Dropdown opciones={calificacion} handleChange={this.props.handleCalificacionChange} />
              </div>
        </div>
        
        <p>{this.props.selectedOption}</p>
        <p>{this.props.selectedTipo}</p>
        <p>{this.props.selectedFrecuencia}</p>
        <p>{this.props.selectedCalificacion}</p>

        <div className='cursos-list'>
            {this.props.cursos.map((curso, index) => (
              <Card curso = {curso}  key={index}/>
              
            ))}
        </div>
      </div>
    );
  }
}

export default InstitucionalView;