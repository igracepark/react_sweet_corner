import React from 'react';
import {Modal} from 'react-bootstrap';

// function name() {

// }

export default props => {
    return (
        <div>
            <Modal.Header closeButton>
            <Modal.Title className='rounded mx-auto d-block' id="contained-modal-title-vcenter">
            {props.name} has been added to your cart
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className='checkoutButtons'>
            <button onClick={() => props.history.push('/products')}>
            Continue Shopping
            </button>
            <button onClick={() =>props.history.push('/cart')}>Go to Cart</button>
            </div>
              </Modal.Body>
              </div>
          );
          
        }

