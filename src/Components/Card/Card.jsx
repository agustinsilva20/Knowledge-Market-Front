import React, { Component } from 'react';
import './Card.css';

import InfoCurso from '../../Views/InfoCurso/InfoCurso';

class Card extends Component {

  render() {
    return (
      <div className='card'>
        <img src={"./src/" + this.props.curso.categoria + ".jpg"} alt="src" />
          <br /><br />
          <h4>Clase de <span>{this.props.curso.Categoria}</span> </h4>
          <div className='card-info'>
            <div className="left">
                <h6>Profesor: <span>{this.props.curso.Nombre}</span></h6>
                <h6>Calificación: <span>{this.props.curso.Promedio}/5</span></h6>
                <h6>Frecuencia: <span>{this.props.curso.FrecuenciaSemanal} Veces por semana</span></h6>
                <h6>Tipo: <span>{this.props.curso.Modalidad}</span></h6></div>
            <div className="right">
                <h4>${this.props.curso.Precio}</h4>
            </div>
          </div>
          
         <div className='vermas' onClick={() => this.props.setModal(true, <InfoCurso curso={this.props.curso} />)}>VER MAS</div>


      </div>
    );
  }
}

export default Card;