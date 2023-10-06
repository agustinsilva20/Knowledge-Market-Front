import React, { Component } from 'react';
import './AnunciosView.css';

import Dropdown from "../../../Components/Dropdown/Dropdown";
import Card from "../../../Components/Card/Card";
import Boton from '../../../Components/Boton/Boton';
import CrearAnuncio from '../../CrearAnuncio/CrearAnuncio';


class InstitucionalView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cursosFiltrados:this.filtrar("ALL", "ALL", "ALL", "ALL")
    };
  }

  create_anuncios = () => {
    this.props.setModal(true,<CrearAnuncio/>)
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
        return curso.categoria.toUpperCase() == categoria.toUpperCase()
      })
    }

    /* seguno filtro por Tipo*/
    if (tipos === 'ALL'){
      cursosFiltrados = cursosFiltrados
   }
   else{
     cursosFiltrados = cursosFiltrados.filter((curso) => {
       return curso.tipo.toUpperCase() == tipos.toUpperCase()
     })
   }

      /* Tercer filtro por frecuencia*/
      if (frencuencia === 'ALL'){
        cursosFiltrados = cursosFiltrados
    }
    else{
      cursosFiltrados = cursosFiltrados.filter((curso) => {
        return curso.frecuencia == frencuencia
      })
    }

    /* Cuarto filtro por calificacion*/
    if (calificacion === 'ALL'){
      cursosFiltrados = cursosFiltrados
    }
    else if (calificacion == -1) {
      cursosFiltrados = cursosFiltrados.filter((curso) => {
          return curso.calificacion <= 1
      })
    }
  else{
    cursosFiltrados = cursosFiltrados.filter((curso) => {
      return curso.calificacion >= calificacion
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
      { value: 1, label: '1 vez por semana' },
      { value: 2, label: '2 veces por semana' },
      { value: 3, label: '3 veces por semana' },
      { value: 4, label: '4 veces por semana' },
      { value: 5, label: '5 veces por semana' },
    ];

    const calificacion = [
      { value: 'ALL', label: 'Todas los calificaciones' },
      { value: -1, label: 'Menos de una estrella' },
      { value: 1, label: 'Mas de una estrella' },
      { value: 2, label: 'Mas de dos estrellas' },
      { value: 3, label: 'Mas de tres estrellas' },
      { value: 4, label: 'Mas de cuatro estrellas' }
    ];


    return (
      <div className="">
        <div className='InstitucionalView'>
          <div className='div-crear-anuncio'>
              <div className='btn-crear' onClick={this.create_anuncios}><Boton text="Crear Anuncio"/></div>
          </div>
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
          

          <div className='cursos-list'>
              {this.state.cursosFiltrados.map((curso, index) => (
                <Card curso = {curso}  key={index} setModal = {this.props.setModal}/>
                
              ))}
          </div>

          {this.state.cursosFiltrados.length === 0 ? (<p>No se encontraron cursos con los filtros seleccionados. Prueba modificando los filtros</p>) : null} 

        </div>
      </div>
    );
  }
}

export default InstitucionalView;