import './App.css';

import Institucional from './Views/Institucional/Institucional';

import Header from './Components/Header/Header';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Views/Login/Login';
import Registro from './Views/Registro/Registro';
import MoreInfo from './Views/MoreInfo/MoreInfo';
import Anuncios from './Views/Anuncios/Anuncios';
import Perfil from './Views/Perfil/Perfil';

import Modal from './Components/Modal/Modal';

import cursosData from './mockdata.json'; // Importa el JSON
import Recuperar from './Views/Recuperar/Recuperar';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        selectedOption: 'ALL',
        selectedTipo: 'ALL',
        selectedFrecuencia: 'ALL',
        selectedCalificacion: 'ALL',
        showModal: false,
        modalElem: "",
        cursos: [] //cursosData.cursos

    };
  }

  handleSelectChange = (event) => {
    this.setState({ selectedOption: event.target.value });


  };
  handleTipoChange = (event) => {
    this.setState({ selectedTipo: event.target.value });
  };
  handleFrecuenciaChange = (event) => {
    this.setState({ selectedFrecuencia: event.target.value });
  };
  handleCalificacionChange = (event) => {
    this.setState({ selectedCalificacion: event.target.value });
  };

  loadCursos = (newcursos) => {
    console.log("cambiando cursos")
    this.setState({ cursos: newcursos }, () => {
      console.log('Estado actualizado:', this.state.cursos);
    });
    console.log(this.state.cursos)
  }

  setModal = (estado, elem) =>{
    console.log("Modal")
    this.setState({ showModal: estado });
    this.setState({ modalElem: elem });
    console.log(estado)
    console.log(elem)
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
    console.log(cursosActualizados)
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
        {this.state.showModal ? <Modal elem = {this.state.modalElem} setModal = {this.setModal}/>: null}
          <Header />
        </header>
        <Router>
          <Routes>
            <Route path="/" element={<Institucional handleSelectChange={this.handleSelectChange} selectedOption={this.state.selectedOption}/>} />
            <Route path="/login" element={<Login />}  />
            <Route path="/recuperar" element={<Recuperar />}  />
            <Route path="/registro" element={<Registro />}  />
            <Route path="/moreinfo" element={<MoreInfo />}  />
            <Route path="/anuncios" element={<Anuncios loadCursos={this.loadCursos} handleSelectChange={this.handleSelectChange} selectedOption={this.state.selectedOption} cursos = {this.state.cursos} handleTipoChange={this.handleTipoChange} handleFrecuenciaChange={this.handleFrecuenciaChange} handleCalificacionChange={this.handleCalificacionChange} selectedTipo={this.state.selectedTipo} selectedFrecuencia={this.state.selectedFrecuencia} selectedCalificacion={this.state.selectedCalificacion} setModal = {this.setModal} agregarCurso={this.agregarCurso}/>}  />
            <Route path="/perfil" element={<Perfil setModal={this.setModal}/>}  />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
