import React, { Component } from 'react';
import './InfoCurso.css';

import Boton from "../../Components/Boton/Boton";
import Input from '../../Components/Input/Input';

import {contratar} from "../../Controller/alumnos.controller";
import {calificar, getCalificacionesCurso} from "../../Controller/calificaciones.controller";
class InfoCurso extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //comentarios : this.props.curso.comentarios,
        comentarios:[],
        nombreInput: '',
        nombre2Input: '',
        calificacionInput: '',
        comentarioInput: '',
        error:"",
        telefonoInput:"",
        horarioInput:"",
        contrado: false,
        comentarioEnviado: false
        

    };
  }

  eliminarComentario = (idComentarioAEliminar) => {
    const comentariosFiltrados = this.state.comentarios.filter(comentario => comentario.id_comentario !== idComentarioAEliminar);
    this.setState({comentarios : comentariosFiltrados})

  }

  agregarComentario = async (nombre,comentario,calificacion)=> {
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
      
      // Llamo a la API
        let dto = {
          cursoID: this.props.curso.id,
          nombre: nombre,
          calificacion: calificacion,
          comentario: comentario
        }
        await calificar(this.props.curso.CursoID, dto)
        this.setState({error:""})
        this.setState({calificacionInput:""})
        this.setState({nombreInput:""})
        this.setState({comentarioInput:""})
        this.setState({comentarioEnviado:true})
        
        }}

        contratar = () => {
          const nombre = this.state.nombreInput;
          const telefono = this.state.telefonoInput;
          const horario = this.state.horarioInput;
          const mensaje = this.state.comentarioInput;
          const telefonoRegex = /^\d{8,}$/;
        
          if (nombre === "") {
            this.setState({ error: "El nombre es requerido" });
          } else if (telefono === "") {
            this.setState({ error: "El telefono es requerido" });
          } else if (horario === "") {
            this.setState({ error: "El horario es requerido" });
          } else if (mensaje === "") {
            this.setState({ error: "El mensaje es requerido" });
          } else if (telefonoRegex.test(telefono) === false) {
            this.setState({
              error: "El telefono debe tener al menos 8 caracteres y deben ser todos números",
            });
          } else {
            // Llamo a la API
            let dto = {
              nombre: nombre,
              telefono: telefono,
              horario: horario,
              mensaje: mensaje,
            };
        
            console.log("asdd", this.props.curso);
      
            contratar(this.props.curso.CursoID, dto);
        
          
            this.setState({ contrado: true });
            this.setState({ error: "" });
            this.setState({ comentarioInput: "" });
            this.setState({ telefonoInput: "" });
            this.setState({ horarioInput: "" });
            this.setState({ nombreInput: "" });
          }
        };

  nombre_handleChange = (event) => {
    this.setState({ nombreInput: event.target.value });
  };
  nombre2_handleChange = (event) => {
    this.setState({ nombre2Input: event.target.value });
  };
  calificacion_handleChange = (event) => {
    this.setState({ calificacionInput: event.target.value });
  };
  comentario_handleChange = (event) => {
    this.setState({ comentarioInput: event.target.value });
  };
  telefono_handleChange = (event) => {
    this.setState({ telefonoInput: event.target.value });
  };
  horario_handleChange = (event) => {
    this.setState({ horarioInput: event.target.value });
    
  };

  async componentDidMount(){
    console.log("props",this.props.curso)
    const comentarios = await getCalificacionesCurso(this.props.curso.CursoID)
    this.setState({comentarios : comentarios.message})
  }
  
  render() {
    const comentarios = this.state.comentarios.map((comentario, index) => (
      <div key={index} className='Comentario'>
        <div className='comentario-info'>
          <p className='comentario-p'>Nombre: <span>{comentario.Nombre}</span></p>
          <p className='comentario-p'>Comentario: <span>{comentario.Comentario}</span></p>
          <p className='comentario-p'>Calificación: <span>{comentario.Calificacion}</span></p>
        </div>
      </div>
    ));
    

    const inputComentario = (<div className="publicar-comentario">
    <h2 className='text-left'>Calificar Docente</h2>
    <Input value={this.state.nombre2Input} onChange={this.nombre2_handleChange} placeholder="Nombre" type="text"/>
    <Input value={this.state.calificacionInput} onChange={this.calificacion_handleChange} placeholder="Putaje de 5" type="text"/>
    <Input value={this.state.comentarioInput} onChange={this.comentario_handleChange} placeholder="Comentario" type="text"/>
    <p className='error'>{this.state.error}</p>
    <div className='boton-enviar-comentario' onClick={()=> this.agregarComentario(this.state.nombre2Input,this.state.comentarioInput,this.state.calificacionInput)}><Boton text= "Enviar Comentario"></Boton></div>
    
  </div>)
    const publicarComentario =  (
      this.state.comentarioEnviado ? <h3 >Calificacion enviada</h3> : inputComentario
      
      
    );

    const contratar =  (
      <div className="publicar-comentario">
        <h2 className='text-left'>Contratar docente</h2>
        
        <Input value={this.state.nombreInput} onChange={this.nombre_handleChange} placeholder="Nombre" type="text"/>
        <Input value={this.state.telefonoInput} onChange={this.telefono_handleChange} placeholder="Telefono" type="text"/>
        <Input value={this.state.horarioInput} onChange={this.horario_handleChange} placeholder="Horario" type="text"/>
        <Input value={this.state.comentarioInput} onChange={this.comentario_handleChange} placeholder="Mensaje" type="text"/>
        <p className='error'>{this.state.error}</p>
        <div className='boton-enviar-comentario' onClick={()=> this.contratar()}><Boton text= "Contratar"></Boton></div>
        {this.state.contrado?<p>El profesor recibio tu solicitud. Se comunicara proximamente</p>:null}
        
      </div>

      
    );

    return (
      
           <div className='infoCurso'>
            <h2>Clase de <span>{this.props.curso.Categoria}</span> </h2>
            <br /><br /><br />
            <h2 className='text-left'>Descripcion</h2>
            <p>{this.props.curso.Descripcion}</p>
            <br /><br />
            <h2 className='text-left'>Informacion</h2>
            <div className='info-curso'>
              <div>
                  <h5>Profesor: <span>{this.props.curso.profesor}</span>  ({this.props.curso.Calificacion}/5 ⭐)</h5>
                  <h5>Frecuencia: <span>{this.props.curso.FrecuenciaSemanal} Veces por semana</span></h5>
              </div>
              <div>
                <h5>Duracion: <span>{this.props.curso.CantidadSemanas} clases</span></h5>
                <h5>Tipo: <span>{this.props.curso.Modalidad}</span></h5>
              </div>
              <div>
              <h5>Precio: <span>${this.props.curso.Precio}</span></h5>
                
              </div>

            </div>
            <br />
            {/*
                <div className="calificar">
              
              {this.state.contrado ? publicarComentario: contratar}
              
            </div>

            */}

            <div className="calificar">
              <br /><br /><br />
              {contratar}
              <br /><br /><br />
              {publicarComentario}
              <br /><br /><br />
            </div>
            
  
            <br /><br />
            <h2 className='text-left'>Calificaciones del docente</h2><br />
            <div className='comentarios-div'>
              {comentarios}
            </div>
            
            
         
            </div>
               

         
      
    );
  }
}

export default InfoCurso;