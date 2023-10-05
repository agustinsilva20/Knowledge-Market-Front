import React, { Component } from 'react';
import './InfoCurso.css';

import Boton from "../../Components/Boton/Boton";

class InfoCurso extends Component {
  constructor(props) {
    super(props);
    this.state = {
        comentarios : this.props.curso.comentarios

    };
  }

  eliminarComentario = (idComentarioAEliminar) => {
    const comentariosFiltrados = this.state.comentarios.filter(comentario => comentario.id_comentario !== idComentarioAEliminar);
    this.setState({comentarios : comentariosFiltrados})

  }

  
  render() {
    const comentarios = this.state.comentarios.map((comentario, index) => (
      <div key={index} className='Comentario'>
        <div className='comentario-info'>
          <p className='comentario-p'>Nombre: <span>{comentario.nombre}</span></p>
          <p className='comentario-p'>Comentario: <span>{comentario.comentario}</span></p>
          <p className='comentario-p'>Calificación: <span>{comentario.calificacion}</span></p>
        </div>
        <div className='eliminar-comentario' onClick={()=> this.eliminarComentario(comentario.id_comentario)}>Eliminar Comentario</div>
      </div>
    ));

    return (
      
           <div className='infoCurso'>
            <h2>Clase de <span>{this.props.curso.categoria}</span> </h2>
            <br /><br /><br />
            <h2 className='text-left'>Descripcion</h2>
            <p>{this.props.curso.descripcion}</p>
            <br /><br />
            <h2 className='text-left'>Informacion</h2>
            <div className='info-curso'>
              <div>
                  <h5>Profesor: <span>{this.props.curso.profesor}</span>  ({this.props.curso.calificacion}/5 ⭐)</h5>
                  <h5>Frecuencia: <span>{this.props.curso.frecuencia} Veces por semana</span></h5>
              </div>
              <div>
                <h5>Duracion: <span>{this.props.curso.duracion} clases</span></h5>
                <h5>Tipo: <span>{this.props.curso.tipo}</span></h5>
              </div>
              <div>
              <h5>Precio: <span>${this.props.curso.precio}</span></h5>
                
              </div>

            </div>
            <div className='btn-contratar'><Boton text="Contratar"/></div>
            <br /><br />
            <h2 className='text-left'>Calificaciones</h2>
            <div className='comentarios-div'>
              {comentarios}
            </div>
         
            </div>
               

         
      
    );
  }
}

export default InfoCurso;