import React, { Component } from 'react';
import './CrearAnuncio.css';
import Input from '../../Components/Input/Input';
import Boton from '../../Components/Boton/Boton';
import Dropdown from '../../Components/Dropdown/Dropdown';

class CrearAnuncio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estadoInput: 'publicado',
      mioInput: "true",
      categoriaInput:"",
      calificacionInput: 0,
      profesorInput: "Juan",
      frecuenciaInput: "",
      tipoInput: "",
      precioInput:"",
      duracionInput: "",
      descripcionInput: "",
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

  crear_anuncio =() => {
    if (this.state.categoriaInput=="" || this.state.frecuenciaInput=="" || this.state.tipoInput=="" || this.state.precioInput=="" || this.state.duracionInput=="" || this.state.descripcionInput=="" || this.state.categoriaInput=="VACIO"|| this.state.frecuenciaInputput=="VACIO"|| this.state.tipoInput=="VACIO" ){
      this.setState({error:"Todos los campos son obligatorios"})
      this.setState({exito:""})
    }
    else{
      this.setState({error:""})
      this.setState({exito:"Curso caragado con exito"})
      this.props.agregarCurso(this.state);
    }
    
  }
  
  render() {
    const categoria = [
      { value: 'VACIO', label: 'Selecciona categoria' },
      { value: 'MUSICA', label: 'Musica' },
      { value: 'MATEMATICA', label: 'Matematica' }
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
        <h2>Crear Anuncio</h2>
        <form action="" className='centrar form-login'>
             <p>Categoria</p>
             <Dropdown opciones={categoria} handleChange={this.categoriaInput_handleChange} />
             <p>Veces por semana</p>
            <Dropdown opciones={frecuencia} handleChange={this.frecuenciaInput_handleChange} />
            <p>Cantidad de semanas</p>
            <Input value={this.state.duracionInput} onChange={this.duracionInput_handleChange} placeholder="Cantidad Semanas" type="text"/>
            <p>Tipo de cursada</p>
            <Dropdown opciones={tipos} handleChange={this.tipoInput_handleChange} />
            <p>Descripcion del Anuncio</p>
            <Input value={this.state.descripcionInput} onChange={this.descripcionInput_handleChange} placeholder="Descripcion" type="text"/>
            <p>Precio del anuncio</p>
            <Input value={this.state.precioInput} onChange={this.precioInput_handleChange} placeholder="Precio" type="text"/>
            <p className='Error-text'>{this.state.error}</p>
            <p className='Exito-text'>{this.state.exito}</p>
            
          
          </form>

          <div className='centrar btn-login' onClick = {this.crear_anuncio}>
            <Boton text="Crear Anuncio"/>
          </div>
      </div>
    );
  }
}

export default CrearAnuncio;