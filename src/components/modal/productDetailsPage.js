import React from 'react';
import {Modal} from 'react-bootstrap';


export default props => {
    console.log("what are the props from productDetailsPage: ", props)
    return (
    <div>
    <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {props.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalCaption'>
              <h4>{props.caption}</h4>
            <img className='rounded mx-auto d-block' src={props.src} alt=''/>
            </Modal.Body>
              </div>
          );
    }

