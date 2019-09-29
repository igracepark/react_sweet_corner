import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import './modal.scss';

export class AddModal extends Component {
constructor(props) {
    super(props);
  }

render() {

    // const {type} = this.props

    return (
      <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {this.props.name}
              </Modal.Title>
            </Modal.Header>
            {/* {
              type === 'cupcakePage' ?

            } */}
            <Modal.Body className='modalCaption'>
              <h4>{this.props.caption}</h4>
            <img className='rounded mx-auto d-block' src={this.props.src} alt=''/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
  }
}
