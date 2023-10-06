import React, { Component } from 'react';
import Boton from '../../../Components/Boton/Boton';
import "./PerfilView.css";
import cursosData from '../../../mockdata.json'; // Importa el JSON
import ListCursos from '../../../Components/ListCursos/ListCursos';
import CrearAnuncio from '../../CrearAnuncio/CrearAnuncio';
import ModificarAnuncios from '../../ModificarAnuncios/ModificarAnuncios';


class PerfilView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cursos: cursosData.cursos,
        showing: "cursos",
        comentarios:[{"id_comentario":1,"nombre": "Carla", "comentario": "Divertida la clase", "calificacion": 4.5}, {"id_comentario":2,"nombre": "Juana", "comentario": "No me gusto", "calificacion": 0}]
    };
  }
  agregarCurso = (newCurso) => {
    const cursos= this.state.cursos;
    const nuevoCurso = {
      estado: 'publicado',
      mio: true,
      categoria:newCurso.categoriaInput,
      calificacion: 0,
      profesor: "Juan",
      frecuencia :newCurso.frecuenciaInput,
      tipo:newCurso.tipoInput,
      precio:newCurso.precioInput,
      duracion:newCurso.duracionInput,
      descripcion:newCurso.descripcionInput,
      comentarios:[],
      id : null
    }
    console.log("asd")

    // Generar un ID único para el nuevo curso
    nuevoCurso.id = Date.now();

    // Agregar el nuevo curso a la lista de cursos
    const cursosActualizados = [...cursos, nuevoCurso];
    this.setState({ cursos: cursosActualizados });
  };

  editarCurso = (id, datosActualizados) => {
    /*this.setState(prevState => {
      console.log('ID del curso a editar:', id);
      console.log('Datos actualizados:', datosActualizados);
      
      const cursosActualizados = prevState.cursos.map(curso => {
        if (curso.id === id) {
          return { ...curso, ...datosActualizados };
        }
        return curso;
      });
      return { cursos: cursosActualizados };
    });*/
    const cursosNuevo = {
      
    }
    let cursosActualizados = this.state.cursos

    cursosActualizados = cursosActualizados.map(
      curso => {
        if (curso.id === id) {
          return { ...curso, ...datosActualizados };
        }
        return curso;
      }
      );

      this.setState({ cursos: cursosActualizados });

    console.log(cursosActualizados)
    
  };

  create_anuncios = () => {
    this.props.setModal(true,<CrearAnuncio agregarCurso={this.agregarCurso}/>)
  }

  modificar_anuncios = (curso) => {
    this.props.setModal(true,<ModificarAnuncios editarCurso={this.editarCurso} curso = {curso}/>)
  }

  togglePublicado = id => {
    const cursosActualizados = this.state.cursos.map(curso =>
      curso.id === id
        ? { ...curso, estado: curso.estado === 'publicado' ? 'despublicado' : 'publicado' }
        : curso
    );
    this.setState({ cursos: cursosActualizados });
  };

  eliminarCurso = id => {
    console.log("asd")
    const cursosActualizados = this.state.cursos.filter(curso => curso.id !== id);
    this.setState({ cursos: cursosActualizados });
    
  };

  obtenerCursosMios = () => {
    const cursosMios = this.state.cursos.filter(curso => curso.mio === true);
    return cursosMios.map(curso => (
      <div key={curso.id}>
        <ListCursos curso={curso} eliminarCurso={this.eliminarCurso} togglePublicado={this.togglePublicado} modificar_anuncios = {this.modificar_anuncios}/>
        
        
      </div>
    ));
  };

  cambiarShowing = (showing) => {
    this.setState({ showing: showing });
  }

  eliminarComentario = (idComentarioAEliminar) => {
    const comentariosFiltrados = this.state.comentarios.filter(comentario => comentario.id_comentario !== idComentarioAEliminar);
    this.setState({comentarios : comentariosFiltrados})
  }
  

  render() {
    const listarCursos = (
      <div className='perfil-div'>
          <h2>Tus Cursos</h2>
          <div className='listado-mis-cursos'>
          <div className='boton-opcion-profesor-crear'onClick = {this.create_anuncios} ><Boton text = "Crear curso nuevo"/></div>
          {this.obtenerCursosMios()}
          </div>
      </div>
    );

    const listarComentarios = (
      <div className='perfil-div'>
          <h2>Tus Comentarios</h2>
          <div className='listado-mis-cursos'>
          {this.state.comentarios.map((comentario, index) => (
            <div key={index} className='Comentario'>
              <div className='comentario-info'>
              <p className='comentario-p'>ID: <span>{comentario.id_comentario}</span></p>
                <p className='comentario-p'>Nombre: <span>{comentario.nombre}</span></p>
                <p className='comentario-p'>Comentario: <span>{comentario.comentario}</span></p>
                <p className='comentario-p'>Calificación: <span>{comentario.calificacion}</span></p>
              </div>
              <div className='eliminar-comentario' onClick={()=> this.eliminarComentario(comentario.id_comentario)}>Eliminar Comentario</div>
            </div>
          ))}
          </div>
      </div>
    );


    return (
      <div>
        <h2>Bienvenido Profesor</h2>
        <br />
        <div className='opciones-profesor'>
            <div className='boton-opcion-profesor' onClick={()=>this.cambiarShowing("cursos")}><Boton text="Mis cursos"/></div>
            <div className='boton-opcion-profesor' onClick={()=>this.cambiarShowing("comentarios")}><Boton text="Gestionar Comentarios"/></div>
            <div className='boton-opcion-profesor' onClick={()=>this.cambiarShowing("alumnos")}><Boton text="Gestionar Alumnos"/></div>
        </div>
        {this.state.showing === "cursos"?listarCursos:null}
        {this.state.showing === "comentarios"?listarComentarios:null}
      </div>
    );
  }
}

export default PerfilView;