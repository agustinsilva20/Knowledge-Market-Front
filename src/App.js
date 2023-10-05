import './App.css';

import Institucional from './Views/Institucional/Institucional';

import Header from './Components/Header/Header';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Views/Login/Login';
import Registro from './Views/Registro/Registro';
import MoreInfo from './Views/MoreInfo/MoreInfo';
import Anuncios from './Views/Anuncios/Anuncios';

import Modal from './Components/Modal/Modal';



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
        cursos:[
          { id:1,categoria: 'Musica', profesor: 'Juan Carlos', calificacion: 4.5, frecuencia: 3, tipo: "Presencial", precio: 500, duracion : 3, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", comentarios:[{nombre: "Carla", comentario: "Muy buen curso", calificacion: 4.5}, {nombre: "Agus", comentario: "Muy buen curso!", calificacion: 4.5}] },
          { id:2,categoria: 'Musica', profesor: 'Pepe Garcia', calificacion: 4.2, frecuencia: 2, tipo: "Presencial", precio: 800, duracion : 6 ,descripcion: "Musica de Pepe Garcia", comentarios:[{nombre: "Agus", comentario: "Muy buen curso!", calificacion: 4.5}]},
          { id:3,categoria: 'Musica', profesor: 'Agustin Perez', calificacion: 3, frecuencia: 1, tipo: "Virtual", precio: 800, duracion : 6 , descripcion: "Musica de Agustin Perez", comentarios:[{nombre: "Messi", comentario: "Me encantoo", calificacion: 5}]},
          { id:4,categoria: 'Matematica', profesor: 'Javier Lopez', calificacion: 4.5, frecuencia: 3, tipo: "Presencial", precio: 500, duracion : 3 , descripcion: "Matematicas avanzadas", comentarios:[{nombre: "Juan", comentario: "muy buena onda el profesor", calificacion: 4.5}] },
          { id:5,categoria: 'Matematica', profesor: 'Esteban Silva', calificacion: 0, frecuencia: 3, tipo: "Presencial", precio: 500, duracion : 3 , descripcion: "Matematica de Esteban Silva", comentarios:[{nombre: "Carla", comentario: "Divertida la clase", calificacion: 4.5}] }
        ]

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

  setModal = (estado, elem) =>{
    console.log("Modal")
    this.setState({ showModal: estado });
    this.setState({ modalElem: elem });
    console.log(estado)
    console.log(elem)
  }

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
            <Route path="/registro" element={<Registro />}  />
            <Route path="/moreinfo" element={<MoreInfo />}  />
            <Route path="/anuncios" element={<Anuncios handleSelectChange={this.handleSelectChange} selectedOption={this.state.selectedOption} cursos = {this.state.cursos} handleTipoChange={this.handleTipoChange} handleFrecuenciaChange={this.handleFrecuenciaChange} handleCalificacionChange={this.handleCalificacionChange} selectedTipo={this.state.selectedTipo} selectedFrecuencia={this.state.selectedFrecuencia} selectedCalificacion={this.state.selectedCalificacion} setModal = {this.setModal}/>}  />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
