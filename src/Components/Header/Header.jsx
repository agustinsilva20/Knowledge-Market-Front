import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className='Header-div'>
            <nav>
              <ul><a href="">Menu</a></ul>
            </nav>
            <div className='logo-img'><img src="./src/Logo.png" alt="" /></div>
            
      </div>
    );
  }
}

export default Header;