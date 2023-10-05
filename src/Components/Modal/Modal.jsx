import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {

  render() {
    return (
      
           <div className='modal-background' onClick={this.props.setModal.bind(false, null)}>
                <div className="modal">
                    <br />
                    <h5 className='exit-modal' onClick={this.props.setModal.bind(false, null)}><span>Exit</span></h5>
                    {this.props.elem}
                </div>
           </div>
      
    );
  }
}

export default Modal;