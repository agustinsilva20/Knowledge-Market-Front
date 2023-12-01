import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  token = localStorage.getItem('x');

  constructor(props) {
    super(props);
    this.state = {
       token : localStorage.getItem('x')
    }
  }

  logout = () => {
    localStorage.removeItem('x');
    this.setState({
      token: null
    })
  }
  render() {
    return (
      <div className='Header-div'>
            <nav>
              <ul><a href="/">Landing Page</a></ul>
              <ul><a href="/anuncios">Anuncios</a></ul>
              {this.state.token && (<ul><a href="/perfil">Mi perfil</a></ul>)}
              {this.state.token && (<ul onClick={this.logout}><a>Cerrar Sesion</a></ul>)}
              {!this.state.token && (<ul><a href="/login">Iniciar Sesion</a></ul>)}
              
              

            </nav>
            <a href="/anuncios"><div className='logo-img'><img src="./src/Logo.png" alt="" /></div></a>
            
            
      </div>
    );
  }
}

export default Header;