import React, { Component } from "react";
import { connect } from "react-redux";
import { addItemToCart, clearProductDetails, getProductDetails } from "../../actions/index";
import "./product_details.scss";
import Money from "../general/money";
import AddModal from "../modal";
// import {Button, ButtonToolbar} from 'react-bootstrap';
import Nutrition from "../nutrition";
import HideText from "../hide_text";

class ProductDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1,
            addModalShow: false,
            nutritionShow: false,
            addModalType: "productDetailsPage",
        };
    }

    incrementQuantity = () => {
        this.setState({ count: (this.state.quantity += 1) });
    };

    decrementQuantity = () => {
        if (this.state.quantity > 0) {
            this.setState({ count: (this.state.quantity -= 1) });
        }
    };

    handleAddToCart = async () => {
        const { id } = this.props.details;
        const { quantity } = this.state;
        await this.props.addItemToCart(id, quantity);
        this.toggleCartModal();
    };

    componentDidMount = () => {
        const productId = this.props.match.params.product_id;
        this.props.getProductDetails(productId);
    };

    // ------DESTRUCTURING-----
    //     componentDidMount(){
    //         const { getProductDetails, match: { params } } = this.props;
    //         getProductDetails(params.product_id);
    //     }
    // }

    toggleSpotlightModal = () => {
        this.setState({
            addModalShow: true,
            addModalType: "productDetailsPage",
        });
    };

    toggleCartModal = () => {
        this.setState({
            addModalShow: true,
            addModalType: "goToCartPage",
        });
    };

    render() {
        const { details } = this.props;
        const { quantity } = this.state;
        let addModalClose = () =>
            this.setState({
                addModalShow: false,
            });

        if (!details) {
            return <div>Loading Message</div>;
        }
        return (
            <div>
                <div className="row">
                    <div className="product-details col-md-6">
                        <img className="productImg" src={details.image.url} />
                        <i onClick={this.toggleSpotlightModal} className="modalIcon material-icons">
                            add_circle_outline
                        </i>
                    </div>

                    <div className="textCol product-details col-md-6">
                        <h2>{details.name}</h2>
                        <div className="caption">{details.caption}</div>
                        <h3 className="description">Description</h3>
                        <div>{details.description}</div>

                        <HideText text={<Nutrition />} />

                        <h3 className="price">
                            <Money money={details.cost} />
                        </h3>
                        <h2>Quantity</h2>
                        <div className="controller">
                            <div className="row">
                                <button onClick={this.decrementQuantity} className="btn btnSmall col-md-1">
                                    -
                                </button>
                                <span className="number col-md-1">{quantity}</span>
                                <button onClick={this.incrementQuantity} className="btn btnSmall col-md-1">
                                    +
                                </button>
                                <button onClick={this.handleAddToCart} className="btn btnAddCart col-md-4">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <ButtonToolbar>
                            <Button
                            className='modalButton'
                            onClick={()=> this.setState({addModalShow:true})}
                            >Enlarge Picture
                            </Button>
                        </ButtonToolbar> */}
                <AddModal
                    show={this.state.addModalShow}
                    onHide={addModalClose}
                    src={details.image.url}
                    name={details.name}
                    caption={details.caption}
                    type={this.state.addModalType}
                    history={this.props.history}
                />
            </div>
        );
    }

    componentWillUnmount = () => {
        this.props.clearProductDetails();
    };
}

const mapStateToProps = state => {
    return {
        details: state.products.details,
    };
};

export default connect(
    mapStateToProps,
    {
        getProductDetails: getProductDetails,
        clearProductDetails: clearProductDetails,
        addItemToCart: addItemToCart,
    },
)(ProductDetails);
