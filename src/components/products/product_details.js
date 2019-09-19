import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItemToCart, clearProductDetails, getProductDetails} from '../../actions/index'
import './product_details.scss';
import Money from '../general/money';


class ProductDetails extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            quantity: 1
        }
    }

incrementQuantity = () => {
    this.setState({ count: this.state.quantity += 1 })
}

decrementQuantity = () => {
    if (this.state.quantity > 0) {
        this.setState({ count: this.state.quantity -= 1 })
    }
}

handleAddToCart = () => {
    const { id } = this.props.details;
    const { quantity } = this.state;
    // console.log('quantity & product id', `Add ${quantity} items to cart, with product ID: ${id}`);
    this.props.addItemToCart(id, quantity);
}

componentDidMount = () => {
    const productId =  this.props.match.params.product_id;
    this.props.getProductDetails(productId);
}

// ------DESTRUCTURING-----
//     componentDidMount(){
//         const { getProductDetails, match: { params } } = this.props;
//         getProductDetails(params.product_id);
//     }
// }

    render() {
        const {details} = this.props;
        const {quantity} = this.state;
        
        if (!details) {
            return (
                <div>
                    Loading Message
                </div>
            )
        } 
            return (
                <div>
                    <div className='row'>
                        <div className="product-details col-md-6">
                             <img className='productImg'src={details.image.url}/>
                        </div>
                        <div className="textCol product-details col-md-6">
                            <h2>{details.name}</h2>
                            <div className='caption'>{details.caption}</div>
                            <h3 className='description'>Description</h3>
                            <div>{details.description}</div>
                            <h5 className='price'>{Money(details.cost)}</h5>
                            <h2>Quantity</h2>
                            <div className='controller'>
                                <div className='row'>
                            <button onClick={this.decrementQuantity} className="btn btn-quantity">-</button>
                            <span className="number">{quantity}</span>
                            <button onClick={this.incrementQuantity} className="btn btn-quantity">+</button>
                            <button onClick={this.handleAddToCart} className="btn">Add To Cart</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    )
                 }

    componentWillUnmount = () => {
        console.log('ProductDetails component about to unmount');
        this.props.clearProductDetails();
    }
}

    const mapStateToProps = state => {
        console.log('state', state.products.details);
             return {
                details: state.products.details
    };
}

export default connect(mapStateToProps, {
    getProductDetails: getProductDetails,
    clearProductDetails: clearProductDetails, 
    addItemToCart: addItemToCart
}) (ProductDetails);