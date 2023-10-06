import React, { Component } from 'react';
import './ListCursos.css';
import Boton from '../Boton/Boton';
class ListCursos extends Component {

  render() {
    
    return (
      
           <div className='listado'>
                <p>Categoria: <span>{this.props.curso.categoria}</span></p>
                <p>Frecuencia: <span>{this.props.curso.frecuencia} Veces por semana</span> </p>
                <p>Duracion: <span>{this.props.curso.duracion}  Semanas</span></p>
                <p>Precio: <span>${this.props.curso.precio}</span> </p>
                <p>Estado: <span className={this.props.curso.estado}>{this.props.curso.estado}</span></p>
                <div className='listado-acciones'>
                    <div onClick={() => this.props.modificar_anuncios(this.props.curso)}><Boton text="Editar"/></div>
                    <div onClick={() => this.props.eliminarCurso(this.props.curso.id)}><Boton text="Eliminar"/></div>
                    <div onClick={() => this.props.togglePublicado(this.props.curso.id)}>
                      {this.props.curso.estado === "publicado"?<Boton text="Despublicar"/>:<Boton text="Publicar"/>}
                    </div>
                    
                </div>
                
                

           </div>
      
    );
  }
}

export default ListCursos;