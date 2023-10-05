import React, { Component } from 'react';
import './Anuncios.css';
import AppComponentDiv from '../../Components/AppComponentDiv/AppComponent';
import AnunciosView from './View/AnunciosView';

class Anuncios extends Component {
 
  render() {
    return (
      <div className='Anuncios'>
        <AppComponentDiv element = {
          <AnunciosView handleSelectChange={this.props.handleSelectChange} 
              selectedOption={this.props.selectedOption} 
              cursos = {this.props.cursos} 
              handleTipoChange={this.props.handleTipoChange} 
              handleFrecuenciaChange={this.props.handleFrecuenciaChange}
              handleCalificacionChange={this.props.handleCalificacionChange}
              selectedTipo={this.props.selectedTipo}
              selectedFrecuencia={this.props.selectedFrecuencia}
              selectedCalificacion={this.props.selectedCalificacion}
              setModal = {this.props.setModal}
            /> } />
      </div>
    );
  }
}

export default Anuncios;