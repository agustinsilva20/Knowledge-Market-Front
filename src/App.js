import './App.css';

import Institucional from './Views/Institucional/Institucional';

import Header from './Components/Header/Header';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Views/Login/Login';
import Registro from './Views/Registro/Registro';
import MoreInfo from './Views/MoreInfo/MoreInfo';
import Anuncios from './Views/Anuncios/Anuncios';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        selectedOption: 'ALL',
        selectedTipo: 'ALL',
        selectedFrecuencia: 'ALL',
        selectedCalificacion: 'ALL',
        cursos:[
          { categoria: 'Musica', profesor: 'Juan Carlos', calificacion: 4.5, frecuencia: "3 Veces por semanal", tipo: "Presencial", precio: 500, duracion : 3  },
          { categoria: 'Musica', profesor: 'Pepe Garcia', calificacion: 4.2, frecuencia: "2 Veces por semana", tipo: "Presencial", precio: 800, duracion : 6 },
          { categoria: 'Musica', profesor: 'Agustin Perez', calificacion: 3, frecuencia: "1 Veces por semana", tipo: "Virtual", precio: 800, duracion : 6 },
          { categoria: 'Matematica', profesor: 'Javier Lopez', calificacion: 4.5, frecuencia: "3 Veces por semanal", tipo: "Presencial", precio: 500, duracion : 3  }
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Router>
          <Routes>
            <Route path="/" element={<Institucional handleSelectChange={this.handleSelectChange} selectedOption={this.state.selectedOption}/>} />
            <Route path="/login" element={<Login />}  />
            <Route path="/registro" element={<Registro />}  />
            <Route path="/moreinfo" element={<MoreInfo />}  />
            <Route path="/anuncios" element={<Anuncios handleSelectChange={this.handleSelectChange} selectedOption={this.state.selectedOption} cursos = {this.state.cursos} handleTipoChange={this.handleTipoChange} handleFrecuenciaChange={this.handleFrecuenciaChange} handleCalificacionChange={this.handleCalificacionChange} selectedTipo={this.state.selectedTipo} selectedFrecuencia={this.state.selectedFrecuencia} selectedCalificacion={this.state.selectedCalificacion}/>}  />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
