import React from 'react';
import ReactModal from 'react-modal';

export default class DisplayModal extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
      return (
        <div>
          <button onClick={this.handleOpenModal}>Open Modal</button>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Sample modal"
          >
            <button onClick={this.handleCloseModal}>Close Modal</button>
            <p>Hello from the modal!</p>
          </ReactModal>
        </div>
      );
    }
  }