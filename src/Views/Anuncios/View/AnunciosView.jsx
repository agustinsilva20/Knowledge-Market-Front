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


    return (
      <div className='InstitucionalView'>
        <h2>Elije tu Categoria</h2>
        <br />
        <Dropdown opciones={opciones} handleChange={this.props.handleSelectChange} />

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