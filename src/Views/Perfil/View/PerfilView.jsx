import React, { Component } from 'react';
import Boton from '../../../Components/Boton/Boton';
import "./PerfilView.css";
import cursosData from '../../../mockdata.json'; // Importa el JSON
import ListCursos from '../../../Components/ListCursos/ListCursos';
import CrearAnuncio from '../../CrearAnuncio/CrearAnuncio';
import ModificarAnuncios from '../../ModificarAnuncios/ModificarAnuncios';

import {getMisCursos, EliminarAnuncio, DespublicarAnuncio, RepublicarAnuncio} from '../../../Controller/perfil.controller';
import {getAlumnos, changeEstadoAnuncio} from '../../../Controller/alumnos.controller';
import {getCalificaciones} from '../../../Controller/calificaciones.controller';


class PerfilView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cursos: [],
        showing: "cursos",
        alumnos:[],
        
        comentarios:[]
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


    // Generar un ID único para el nuevo curso
    nuevoCurso.id = Date.now();

    // Agregar el nuevo curso a la lista de cursos
    const cursosActualizados = [...cursos, nuevoCurso];
    this.setState({ cursos: cursosActualizados });
  };

  editarCurso = (id, datosActualizados) => {
  
      console.log("Actualizar", datosActualizados)

    
  };

  create_anuncios = () => {
    this.props.setModal(true,<CrearAnuncio agregarCurso={this.agregarCurso}/>)
  }

  

  togglePublicado = async (id, estado) => {
    let response = ""
    if (estado === "NOTPUBLISH") {
      response = await RepublicarAnuncio(id)
    }
    else{
      response = await DespublicarAnuncio(id)
    }
    
    if (response.rdo === 0){
      this.obtenerCursosMios();
    }

  };

  eliminarCurso = async (id) => {
    
    //const cursosActualizados = this.state.cursos.filter(curso => curso.id !== id);
    //this.setState({ cursos: cursosActualizados });
    console.log("id curso", id)
    let response = await EliminarAnuncio(id)
    if (response.rdo === 0){
        this.obtenerCursosMios();
    }



    
  };

  obtenerCursosMios = async () => {
    //const cursosMios = this.state.cursos.filter(curso => curso.mio === true);
    // Obtengo los cursos
    let cursosMios = await getMisCursos()
    this.setState ({cursos: cursosMios.message})
    console.log("Asd@,",cursosMios)
    
  };

  obtenerAlumnosMios = async () => {
    let alumnosMios = await getAlumnos()
    console.log("alumnos", alumnosMios)
    this.setState ({alumnos: alumnosMios.message})
  }

  obtenerCalificaciones = async () => {
    let calificaciones = await getCalificaciones()
    console.log("calificaciones", calificaciones)
    this.setState({comentarios: calificaciones.message})
  }

  cambiarShowing = (showing) => {
    this.setState({ showing: showing });
  }

  eliminarComentario = (idComentarioAEliminar) => {
    const comentariosFiltrados = this.state.comentarios.filter(comentario => comentario.id_comentario !== idComentarioAEliminar);
    this.setState({comentarios : comentariosFiltrados})
  }

  rechazarAlumno = (idAlumnoAEliminar) => {
    //const alumnosFiltrados = this.state.alumnos.filter(alumno => alumno.id !== idAlumnoAEliminar);
    //this.setState({alumnos : alumnosFiltrados})
    changeEstadoAnuncio("rechazado",idAlumnoAEliminar)
    this.obtenerAlumnosMios()

  }

  modificarAlumno = (idAlumno, estado) => {

    changeEstadoAnuncio(estado,idAlumno)
    this.obtenerAlumnosMios()
    /* 
    const alumnosNuevos = {
      
    }
    const datoNuevo = {estado: estado}
    let alumnosActualizados = this.state.alumnos

    alumnosActualizados = alumnosActualizados.map(
      alumno => {
        if (alumno.id === idAlumno) {
          return { ...alumno, ...datoNuevo };
        }
        return alumno;
      }
      );

      this.setState({ alumnos: alumnosActualizados });
      */
  }
  modificar_anuncios = (curso) => {
    this.props.setModal(true,<ModificarAnuncios editarCurso={this.editarCurso} curso = {curso} obtenerCursosMios = {this.obtenerCursosMios}/>)
  }
  componentDidMount() {
    this.obtenerCursosMios()
    this.obtenerAlumnosMios()
    this.obtenerCalificaciones()
  }


  render() {
    const listarCursos = (
      <div className='perfil-div'>
          <h2>Tus Cursos</h2>
          <div className='listado-mis-cursos'>
          {/*<div className='boton-opcion-profesor-crear'onClick = {this.create_anuncios} ><Boton text = "Crear curso nuevo"/></div>*/}
          {this.state.cursos.map(curso => (
            <div key={curso.cursoID}>
              {console.log("Asd@2222,",curso)}
              <ListCursos curso={curso} eliminarCurso={this.eliminarCurso} togglePublicado={this.togglePublicado} modificar_anuncios = {this.modificar_anuncios}  />
        
            </div>
          ))}
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
                <p className='comentario-p'>Nombre: <span>{comentario.Nombre}</span></p>
                <p className='comentario-p'>Comentario: <span>{comentario.Comentario}</span></p>
                <p className='comentario-p'>Calificación: <span>{comentario.Calificacion}</span></p>
                <p className='comentario-p'>Estado: <span>{comentario.Estado}</span></p>
              </div>
              <div className='eliminar-comentario' onClick={()=> this.eliminarComentario(comentario.id_comentario)}>Aceptar</div>
              <div className='eliminar-comentario' onClick={()=> this.eliminarComentario(comentario.id_comentario)}>Eliminar Comentario</div>
            </div>
          ))}
          </div>
      </div>
    );

    const listarAlumnos = (
      <div className='perfil-div'>
          <h2>Tus Alumnos</h2>
          <div className='listado-mis-cursos'>
          {console.log("alumno", this.state.alumnos)}
          {this.state.alumnos.map((alumno, index) => (
            
            <div key={index} className='Comentario Comentario2'>
              <div className='comentario-info'>
              <p className='comentario-p'>Curso de: <span>{alumno.Categoria}</span></p>
                <p className='comentario-p'>Nombre: <span>{alumno.Nombre}</span></p>
                <p className='comentario-p'>Telefono: <span>{alumno.Telefono}</span></p>
                <p className='comentario-p'>Estado: <span>{alumno.Estado}</span></p>
              </div>
              {
                alumno.Estado === "PENDIENTE" ? <div className="acciones-alumnos">
                <div onClick={()=> this.rechazarAlumno(alumno.ContratacionID)}><Boton text="Rechazar Alumno"/></div>
                <div onClick={()=> this.modificarAlumno(alumno.ContratacionID, "aceptar")}><Boton text="Aceptar Alumno"/></div>
              </div>:
              null
              }

              {
                alumno.Estado === "ACTIVO" ? <div className="acciones-alumnos">
                <div onClick={()=> this.modificarAlumno(alumno.ContratacionID, "fin")}><Boton text="Finalizar Cursada"/></div>
              </div>:
              null
              }
              
              
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
            <div className='boton-opcion-profesor' onClick={()=>this.cambiarShowing("cursos")}><Boton text="Mis cursos" estilo={"boton-azul"}/></div>
            <div className='boton-opcion-profesor' onClick={()=>this.cambiarShowing("comentarios")}><Boton text="Gestionar Comentarios" estilo={"boton-azul"}/></div>
            <div className='boton-opcion-profesor' onClick={()=>this.cambiarShowing("alumnos")}><Boton text="Gestionar Alumnos" estilo={"boton-azul"}/></div>
        </div>
        {this.state.showing === "cursos"?listarCursos:null}
        {this.state.showing === "comentarios"?listarComentarios:null}
        {this.state.showing === "alumnos"?listarAlumnos:null}
      </div>
    );
  }
}

export default PerfilView;