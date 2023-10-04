import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  render() {
    return (
      <div className='card'>
        <img src={"./src/" + this.props.curso.categoria + ".jpg"} alt="src" />
          <br /><br />
          <h4>Clase de <span>{this.props.curso.categoria}</span> </h4>
          <div className='card-info'>
            <div className="left">
                <h6>Profesor: <span>{this.props.curso.profesor}</span></h6>
                <h6>Calificación: <span>{this.props.curso.calificacion}/5</span></h6>
                <h6>Frecuencia: <span>{this.props.curso.frecuencia}</span></h6>
                <h6>Tipo: <span>{this.props.curso.tipo}</span></h6></div>
            <div className="right">
                <h4>${this.props.curso.precio}</h4>
            </div>
          </div>

      </div>
    );
  }
}

export default Card;