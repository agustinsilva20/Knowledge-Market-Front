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
        showing: "cursos"
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

    return (
      <div>
        <h2>Bienvenido Profesor</h2>
        <br />
        <div className='opciones-profesor'>
            <div className='boton-opcion-profesor'><Boton text="Mis cursos"/></div>
            <div className='boton-opcion-profesor'><Boton text="Gestionar Comentarios"/></div>
            <div className='boton-opcion-profesor'><Boton text="Gestionar Alumnos"/></div>
        </div>
        {this.state.showing === "cursos"?listarCursos:null}
      </div>
    );
  }
}

export default PerfilView;