import './App.css';

import Institucional from './Views/Institucional/Institucional';

import Header from './Components/Header/Header';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Views/Login/Login';
import Registro from './Views/Registro/Registro';
import MoreInfo from './Views/MoreInfo/MoreInfo';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        selectedOption: 'ALL'
    };
  }

  handleSelectChange = (event) => {
    this.setState({ selectedOption: event.target.value });
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
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
