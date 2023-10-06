import React, { Component } from 'react';
import './InstitucionalView.css';

import Dropdown from "../../../Components/Dropdown/Dropdown";
import Boton from '../../../Components/Boton/Boton';

class InstitucionalView extends Component {
  buscar_cursos = () => {
    window.location.replace("/anuncios")
    
  }
  render() {

    const opciones = [
      { value: 'ALL', label: 'Todas las categorias' },
      { value: 'MUSICA', label: 'Musica' },
      { value: 'MATEMATICA', label: 'Matematica' }
    ];

    



    return (
      <div className='InstitucionalView'>
        <h2>¿Necesitas clases particulares?</h2>
        <h3>Te ofrecemos los mejores profesores</h3>
        <div className='space'></div>
        {/*<Dropdown opciones={opciones} handleChange={this.props.handleSelectChange} />*/}
        <h4>Contrata ya mismo a tu proximo profesor</h4>
        <div className='btn-institucional-buscar'>
          
        <Boton text="Buscar profesores"  handleClick = {this.buscar_cursos}/>
        </div>
        
        <div className='space'></div>
        <h4>¿Deseas ofrecer tus servicios?</h4>
        <div className='btn-institucional-registro'>
          <a href="/registro"><Boton text="Registrate"/></a>
        </div>
        <h5>¿Ya estas registrado? <a href="/login"><span>Ingresa a tu cuenta</span></a></h5>
        <br />
        


      </div>
    );
  }
}

export default InstitucionalView;