import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {

  render() {
    return (
      
           <div className='modal-background'>
                <div className="modal">
                    <br />
                    <h5 className='exit-modal' onClick={this.props.setModal.bind(false, null)}><span>Exit</span></h5>
                    {this.props.elem}
                    <br />
                    <h5 className='' onClick={this.props.setModal.bind(false, null)}><span>Exit</span></h5>
                </div>
           </div>
      
    );
  }
}

export default Modal;