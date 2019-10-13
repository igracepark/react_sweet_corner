import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./modal.scss";
import GoToCart from "../modal/goToCart";
import ProductDetailsPage from "../modal/productDetailsPage";

class AddModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { type } = this.props;

        return (
            <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                {type === "productDetailsPage" ? <ProductDetailsPage {...this.props} /> : <GoToCart {...this.props} />}

                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AddModal;
