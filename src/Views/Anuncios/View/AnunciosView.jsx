import React, { Component } from 'react';
import './AnunciosView.css';

import Dropdown from "../../../Components/Dropdown/Dropdown";
import Card from "../../../Components/Card/Card";


class InstitucionalView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cursosFiltrados:this.filtrar("ALL", "ALL", "ALL", "ALL")
    };
  }

  
  handleSelectChange =(event) => {
    this.props.handleSelectChange(event)
    let categoria = event.target.value /*Este asi por el asincronismo del setstate*/
    let tipos =this.props.selectedTipo
    let frecuencia = this.props.selectedFrecuencia
    let calificacion = this.props.selectedCalificacion
    let filtro = this.filtrar(categoria, tipos, frecuencia, calificacion)
    console.log(filtro)
    this.setState({
      cursosFiltrados: filtro
    })
  }

  handleTipoChange=(event) => {

    this.props.handleTipoChange(event)
    let tipos = event.target.value /*Este asi por el asincronismo del setstate*/
    let categoria =this.props.selectedOption
    let frecuencia = this.props.selectedFrecuencia
    let calificacion = this.props.selectedCalificacion
    console.log(tipos, categoria, frecuencia, calificacion)
    let filtro = this.filtrar(categoria, tipos, frecuencia, calificacion)
    console.log(filtro)
    this.setState({
      cursosFiltrados: filtro
    })
  }

  handleFrecuenciaChange=(event) => {

    this.props.handleFrecuenciaChange(event)
    let tipos = this.props.selectedTipo
    let categoria =this.props.selectedOption
    let frecuencia = event.target.value /*Este asi por el asincronismo del setstate*/
    let calificacion = this.props.selectedCalificacion
    let filtro = this.filtrar(categoria, tipos, frecuencia, calificacion)
    console.log(filtro)
    this.setState({
      cursosFiltrados: filtro
    })
  }

  handleCalificacionChange =(event) => {

    this.props.handleCalificacionChange(event)
    let tipos = this.props.selectedTipo
    let categoria =this.props.selectedOption
    let frecuencia = this.props.selectedFrecuencia
    let calificacion = event.target.value /*Este asi por el asincronismo del setstate*/
    let filtro = this.filtrar(categoria, tipos, frecuencia, calificacion)
    console.log(filtro)
    this.setState({
      cursosFiltrados: filtro
    })
  }

  filtrar = (categoria, tipos, frencuencia, calificacion) => {
    /* Creo objeto de respuesta*/
    let cursosFiltrados = [];

    /* Primero filtro por Categoria*/
    if (categoria === 'ALL'){
       cursosFiltrados = this.props.cursos
    }
    else{
      cursosFiltrados = this.props.cursos.filter((curso) => {
        console.log(curso.categoria.toUpperCase(), categoria.toUpperCase())
        console.log(curso.categoria.toUpperCase() == categoria.toUpperCase())
        return curso.categoria.toUpperCase() == categoria.toUpperCase()
      })
    }

    /* seguno filtro por Tipo*/
    if (tipos === 'ALL'){
      cursosFiltrados = cursosFiltrados
   }
   else{
     cursosFiltrados = cursosFiltrados.filter((curso) => {
       console.log(curso.tipo.toUpperCase(), tipos.toUpperCase())
       console.log(curso.tipo.toUpperCase() == tipos.toUpperCase())
       return curso.tipo.toUpperCase() == tipos.toUpperCase()
     })
   }

    return cursosFiltrados

  }


  render() {

    const opciones = [
      { value: 'ALL', label: 'Todas las categorias' },
      { value: 'MUSICA', label: 'Musica' },
      { value: 'MATEMATICA', label: 'Matematica' }
    ];

    const tipos = [
      { value: 'ALL', label: 'Todas los Tipos' },
      { value: 'PRESENCIAL', label: 'Presencial' },
      { value: 'VIRTUAL', label: 'Virtual' }
    ];

    const frecuencia = [
      { value: 'ALL', label: 'Todas los Frecuencias' },
      { value: 'UNA', label: '1 vez por semana' },
      { value: 'DOS', label: '2 veces por semana' },
      { value: 'TRES', label: '3 veces por semana' },
      { value: 'CUATRO', label: '4 veces por semana' },
      { value: 'CINCO', label: '5 veces por semana' },
    ];

    const calificacion = [
      { value: 'ALL', label: 'Todas los calificaciones' },
      { value: 'MENOS1', label: 'Menos de una estrella' },
      { value: 'MAS1', label: 'Mas de una estrella' },
      { value: 'MAS2', label: 'Mas de dos estrellas' },
      { value: 'MAS3', label: 'Mas de tres estrellas' },
      { value: 'MAS4', label: 'Mas de cuatro estrellas' },
      { value: 'MAS5', label: 'Mas de cinco estrellas' },
    ];


    return (
      <div className='InstitucionalView'>
        <h2>Elije tu Categoria</h2>
        <br />
        <div className='elegir-categoria'>
          <Dropdown opciones={opciones} handleChange={this.handleSelectChange} />
        </div>
        <div className='filtros'>
              <div className='elegir-filtro'>
                  <p className='filtro-text'>Filtrar x Tipo</p>
                  <Dropdown opciones={tipos} handleChange={this.handleTipoChange} />
              </div>
              <div className='elegir-filtro'>
                <p className='filtro-text'>Filtrar x Frecuencia</p>
                  <Dropdown opciones={frecuencia} handleChange={this.handleFrecuenciaChange} />
              </div>
              <div className='elegir-filtro'>
                <p className='filtro-text'>Filtrar x Calificacion</p>
                <Dropdown opciones={calificacion} handleChange={this.handleCalificacionChange} />
              </div>
        </div>
        
        <p>{this.props.selectedOption}</p>
        <p>{this.props.selectedTipo}</p>
        <p>{this.props.selectedFrecuencia}</p>
        <p>{this.props.selectedCalificacion}</p>

        <div className='cursos-list'>
            {this.state.cursosFiltrados.map((curso, index) => (
              <Card curso = {curso}  key={index}/>
              
            ))}
        </div>
      </div>
    );
  }
}

export default InstitucionalView;