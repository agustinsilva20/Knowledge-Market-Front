import React, { Component } from 'react';
import './ListCursos.css';
import Boton from '../Boton/Boton';
class ListCursos extends Component {

  render() {
    
    return (
      
           <div className='listado'>
                <p>Categoria: <span>{this.props.curso.Categoria}</span></p>
                <p>Frecuencia: <span>{this.props.curso.FrecuenciaSemanal} Veces por semana</span> </p>
                <p>Duracion: <span>{this.props.curso.cantidadSemanas}  Semanas</span></p>
                <p>Precio: <span>${this.props.curso.Precio}</span> </p>
                <p>Estado: <span className={this.props.curso.Estado}>{this.props.curso.Estado}</span></p>
                <div className='listado-acciones'>
                    <div onClick={() => this.props.modificar_anuncios(this.props.curso)}><Boton text="Editar"/></div>
                    <div onClick={() => this.props.eliminarCurso(this.props.curso.CursoID)}><Boton text="Eliminar" estilo={"boton-rojo"}/></div>
                    <div onClick={() => this.props.togglePublicado(this.props.curso.CursoID, this.props.curso.Estado)}>
                      {this.props.curso.Estado === "PUBLICADO"?<Boton text="Despublicar" estilo={"boton-rojo-claro"}/>:<Boton text="Publicar"/>}
                    </div>
                    
                </div>
                
                

           </div>
      
    );
  }
}

export default ListCursos;