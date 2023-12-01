import React, { Component } from 'react';
import './ModificarAnuncios.css';
import Input from '../../Components/Input/Input';
import Boton from '../../Components/Boton/Boton';
import Dropdown from '../../Components/Dropdown/Dropdown';

import {updateAnuncio} from '../../Controller/perfil.controller';

class ModificarAnuncios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estadoInput: 'publicado',
      mioInput: "true",
      categoriaInput:this.props.curso.Categoria,
      calificacionInput: 0,
      profesorInput: "Juan",
      frecuenciaInput: this.props.curso.FrecuenciaSemanal,
      tipoInput: this.props.curso.Modalidad,
      precioInput:this.props.curso.Precio,
      duracionInput: this.props.curso.CantidadSemanas,
      descripcionInput: this.props.curso.Descripcion,
      comentarios:[],
      error:"",
      exito:""

    };
  }

  categoriaInput_handleChange = (event) => {
    this.setState({ categoriaInput: event.target.value });
  };
  frecuenciaInput_handleChange = (event) => {
    this.setState({ frecuenciaInput: event.target.value });
  };
  tipoInput_handleChange = (event) => {
    this.setState({ tipoInput: event.target.value });
  };
  precioInput_handleChange = (event) => {
    this.setState({ precioInput: event.target.value });
  };
  duracionInput_handleChange = (event) => {
    this.setState({ duracionInput: event.target.value });
  };
  descripcionInput_handleChange = (event) => {
    this.setState({ descripcionInput: event.target.value });
  };

  modificar_anuncio = async () => {
    if (this.state.categoriaInput==="" || this.state.frecuenciaInput==="" || this.state.tipoInput==="" || this.state.precioInput==="" || this.state.duracionInput==="" || this.state.descripcionInput==="" || this.state.categoriaInput==="VACIO"|| this.state.frecuenciaInputput==="VACIO"|| this.state.tipoInput==="VACIO" ){
      this.setState({error:"Todos los campos son obligatorios"})
      this.setState({exito:""})
    }
    else{
      this.setState({error:""})
      //this.setState({exito:"Curso modificado con exito"})
      const datosEditados = {
        categoria : this.state.categoriaInput,
        frecuencia : this.state.frecuenciaInput,
        modalidad : this.state.tipoInput,
        precio : this.state.precioInput,
        veces : this.state.duracionInput,
        descripcion : this.state.descripcionInput,
        cursoID : this.props.curso.CursoID

      }
      //this.props.editarCurso(this.props.curso.id, datosEditados);

      // Llamo a la API
      let response = await updateAnuncio(datosEditados)
      if (response.rdo === 0){
        this.setState({exito:"Anuncio modificado con exito"})
        this.setState({error:""})
        // Actualizo el listado
        this.props.obtenerCursosMios()
      }
      else{
        this.setState({error:response.message})
        this.setState({exito:""})
      }

    }
    
  }
  
  render() {
    const categoria = [
      { value: 'VACIO', label: 'Selecciona categoria' },
      { value: 'MUSICA', label: 'Musica' },
      { value: 'MATEMATICA', label: 'Matematica' },
      { value: 'HISTORIA', label: 'Historia' },
      { value: 'PROGRAMACION', label: 'Programacion' },
      { value: 'INGLES', label: 'Ingles' },
      { value: 'FISICA', label: 'Fisica' },
      { value: 'QUIMICA', label: 'Quimica' },
      { value: 'BIOLOGIA', label: 'Biologia' },
    ];

    const tipos = [
      { value: 'VACIO', label: 'Selecciona un tipo' },
      { value: 'PRESENCIAL', label: 'Presencial' },
      { value: 'VIRTUAL', label: 'Virtual' }
    ];

    const frecuencia = [
      { value: 'VACIO', label: 'Selecciona veces por semana' },
      { value: 1, label: '1 vez por semana' },
      { value: 2, label: '2 veces por semana' },
      { value: 3, label: '3 veces por semana' },
      { value: 4, label: '4 veces por semana' },
      { value: 5, label: '5 veces por semana' },
    ];
    return (
      <div className="">
        <h2>Modificar Anuncio</h2>
        <form action="" className='centrar form-login'>
             <p>Categoria</p>
             <Dropdown opciones={categoria} handleChange={this.categoriaInput_handleChange} value = {this.state.categoriaInput} />
             <p>Veces por semana</p>
            <Dropdown opciones={frecuencia} handleChange={this.frecuenciaInput_handleChange} value = {this.state.frecuenciaInput} />
            <p>Cantidad de semanas</p>
            <Input value={this.state.duracionInput} onChange={this.duracionInput_handleChange} placeholder="Cantidad Semanas" type="text" />
            <p>Tipo de cursada</p>
            <Dropdown opciones={tipos} handleChange={this.tipoInput_handleChange} value = {this.state.tipoInput}/>
            <p>Descripcion del anuncio</p>
            <Input value={this.state.descripcionInput} onChange={this.descripcionInput_handleChange} placeholder="Descripcion" type="text"/>
            <p>Precio del anuncio</p>
            <Input value={this.state.precioInput} onChange={this.precioInput_handleChange} placeholder="Precio" type="text"/>
            <p className='Error-text'>{this.state.error}</p>
            <p className='Exito-text'>{this.state.exito}</p>
            
          
          </form>

          <div className='centrar btn-login' onClick = {this.modificar_anuncio}>
            <Boton text="Modificar Anuncio"/>
          </div>
      </div>
    );
  }
}

export default ModificarAnuncios;