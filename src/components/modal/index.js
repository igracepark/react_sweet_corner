import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';

export class AddModal extends Component {
constructor(props) {
    super(props);
}

render() {
    return (

<Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>

    )
}
}