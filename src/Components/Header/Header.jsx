import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div className='Header-div'>
            <nav>
              <ul><a href="/anuncios">Menu</a></ul>
              <ul><a href="/perfil">Mi perfil</a></ul>
            </nav>
            <div className='logo-img'><img src="./src/Logo.png" alt="" /></div>
            
      </div>
    );
  }
}

export default Header;