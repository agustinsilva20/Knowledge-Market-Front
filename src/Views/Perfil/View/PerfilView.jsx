import React, { Component } from 'react';
import Boton from '../../../Components/Boton/Boton';
import "./PerfilView.css";
import cursosData from '../../../mockdata.json'; // Importa el JSON
import ListCursos from '../../../Components/ListCursos/ListCursos';

class PerfilView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cursos: cursosData.cursos,
        showing: "cursos"
    };
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
        <ListCursos curso={curso} eliminarCurso={this.eliminarCurso} togglePublicado={this.togglePublicado}/>
        
        
      </div>
    ));
  };
  render() {
    const listarCursos = (
      <div className='perfil-div'>
          <h2>Tus Cursos</h2>
          <div className='listado-mis-cursos'>
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