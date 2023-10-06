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
      comentarios:[]

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
    console.log("Test")
    this.props.agregarCurso(this.state);
  }
  
  render() {
    const categoria = [
      { value: 'MUSICA', label: 'Musica' },
      { value: 'MATEMATICA', label: 'Matematica' }
    ];

    const tipos = [
      { value: 'PRESENCIAL', label: 'Presencial' },
      { value: 'VIRTUAL', label: 'Virtual' }
    ];

    const frecuencia = [
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
            <Dropdown opciones={frecuencia} handleChange={this.tipoInput_handleChange} />
            <Input value={this.state.descripcionInput} onChange={this.descripcionInput_handleChange} placeholder="Descripcion" type="text"/>
            <Input value={this.state.precioInput} onChange={this.precioInput_handleChange} placeholder="Precio" type="text"/>
            
          
          </form>

          <div className='centrar btn-login' onClick = {this.crear_anuncio}>
            <Boton text="Crear Anuncio"/>
          </div>
      </div>
    );
  }
}

export default CrearAnuncio;