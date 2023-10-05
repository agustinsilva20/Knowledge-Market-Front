import React, { Component } from 'react';
import './InfoCurso.css';

import Boton from "../../Components/Boton/Boton";
import Input from '../../Components/Input/Input';

class InfoCurso extends Component {
  constructor(props) {
    super(props);
    this.state = {
        comentarios : this.props.curso.comentarios,
        nombreInput: '',
        calificacionInput: '',
        comentarioInput: '',
        error:""

    };
  }

  eliminarComentario = (idComentarioAEliminar) => {
    const comentariosFiltrados = this.state.comentarios.filter(comentario => comentario.id_comentario !== idComentarioAEliminar);
    this.setState({comentarios : comentariosFiltrados})

  }

  agregarComentario = (nombre,comentario,calificacion)=> {
    if (nombre==""){
      this.setState({error:"El nombre es requerido"})
    }
    else if (comentario==""){
      this.setState({error:"El comentario es requerido"})
    }
    else if (calificacion==""){
      this.setState({error:"La calificacion es requerida"})
    }
    else{
      try {
        calificacion = parseInt(calificacion); // Intenta convertir la cadena a un número entero
        if (isNaN(calificacion)) {
          throw new Error("No es un número válido"); // Lanza un error si no es un número
        }
        if (calificacion < 0 || calificacion > 5) {
          this.setState({error:"La calificación debe estar entre 1 y 5"})
        }
        else{
          const id_comentario = this.state.comentarios.length + 1;
          this.setState({comentarios : [...this.state.comentarios,{id_comentario, nombre,comentario,calificacion}]})
          this.setState({error:""})
        }
        
      } catch (error) {
        this.setState({error:"debes ingresar un numero valido"})
      }
    }
    
  }

  nombre_handleChange = (event) => {
    this.setState({ nombreInput: event.target.value });
  };
  calificacion_handleChange = (event) => {
    this.setState({ calificacionInput: event.target.value });
  };
  comentario_handleChange = (event) => {
    this.setState({ comentarioInput: event.target.value });
  };
  
  render() {
    const comentarios = this.state.comentarios.map((comentario, index) => (
      <div key={index} className='Comentario'>
        <div className='comentario-info'>
        <p className='comentario-p'>ID: <span>{comentario.id_comentario}</span></p>
          <p className='comentario-p'>Nombre: <span>{comentario.nombre}</span></p>
          <p className='comentario-p'>Comentario: <span>{comentario.comentario}</span></p>
          <p className='comentario-p'>Calificación: <span>{comentario.calificacion}</span></p>
        </div>
        <div className='eliminar-comentario' onClick={()=> this.eliminarComentario(comentario.id_comentario)}>Eliminar Comentario</div>
      </div>
    ));

    const publicarComentario =  (
      <div className="publicar-comentario">
        <Input value={this.state.nombreInput} onChange={this.nombre_handleChange} placeholder="Nombre" type="text"/>
        <Input value={this.state.calificacionInput} onChange={this.calificacion_handleChange} placeholder="Putaje de 5" type="text"/>
        <Input value={this.state.comentarioInput} onChange={this.comentario_handleChange} placeholder="Comentario" type="text"/>
        <p className='error'>{this.state.error}</p>
        <div className='boton-enviar-comentario' onClick={()=> this.agregarComentario(this.state.nombreInput,this.state.comentarioInput,this.state.calificacionInput)}><Boton text= "Enviar Comentario"></Boton></div>
        
      </div>
    );

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
            
            <div className="calificar">
              <h2 className='text-left'>Calificar Docente</h2>
              {publicarComentario}
              
            </div>
         
            </div>
               

         
      
    );
  }
}

export default InfoCurso;