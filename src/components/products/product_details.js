import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItemToCart, clearProductDetails, getProductDetails} from '../../actions/index'
import './product_details.scss';
import Money from '../general/money';
import {AddModal} from '../../components/modal';
import {Button, ButtonToolbar} from 'react-bootstrap';
import Nutrition from '../nutrition';

class ProductDetails extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            quantity: 1,
            addModalShow: false
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

handleAddToCart = async() => {
    const { id } = this.props.details;
    const { quantity } = this.state;
    await this.props.addItemToCart(id, quantity);

    this.props.history.push('/cart');
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
        let addModalClose = () => this.setState ({
            addModalShow: false
        });
        
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
                            {/* <button onClick={Nutrition} className='btn'>Nutrition</button> */}
                         
                            <h5 className='price'>{Money(details.cost)}</h5>
                            <h2>Quantity</h2>
                            <div className='controller'>
                                <div className='row'>
                            <button onClick={this.decrementQuantity} className="btn btnSmall col-md-1">-</button>
                            <span className="number col-md-1">{quantity}</span>
                            <button onClick={this.incrementQuantity} className="btn btnSmall col-md-1">+</button>
                            <button onClick={this.handleAddToCart} className="btn btnAddCart col-md-4">Add To Cart</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div><Nutrition/></div>
                        <ButtonToolbar>
                            <Button
                            className='modalButton'
                            onClick={()=> this.setState({addModalShow:true})}
                            >Enlarge Picture
                            </Button>
                        </ButtonToolbar>
                        <AddModal
                        show={this.state.addModalShow}
                        onHide={addModalClose}
                        src={details.image.url}
                        name={details.name}
                        caption={details.caption}
                        />
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