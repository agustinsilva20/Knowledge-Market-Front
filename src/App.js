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

import cursosData from './mockdata.json'; // Importa el JSON



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
        cursos: cursosData.cursos

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
