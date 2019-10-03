import React, {Component} from 'react';
import './cart.scss';
import {connect} from 'react-redux';
import {getActiveCart, removeProduct} from '../../actions/index';
import Money from '../general/money';
import { Link } from 'react-router-dom';
import UpDownArrow from './upDownArrow';

class Cart extends Component {
    constructor(props){
        super(props);
        }
    
    componentDidMount = () => {
        this.props.getActiveCart();
        if (this.props.cartItems) {
        const itemId = this.props.cartItems.itemId;
        }
    }

    componentDidCatch = (error) => {
        console.log("error from component did catch: ", error)
    }

    handleRemove = async(itemId) => {
        await this.props.removeProduct(itemId);
        this.props.getActiveCart();
}

    render() {
        if (!this.props.cartTotals) {
            return false;
            } 

            const {cost, items} = this.props.cartTotals;
            
            // const { productId, name, thumbnail: {url}, each, quantity } = this.props.cartItems;
            
        return (
            <div>
                <h1 className="center">Cart</h1>
                <table className="table table-hover">
                    <thead>
                         <tr>
                            <th scope="col"></th>
                            <th scope="col">Product</th>
                            <th scope="col">Each</th>
                            <th scope="col" className='center'>Quantity</th>
                            <th scope="col">Total</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.cartItems && this.props.cartItems.map(cartItems => 
                            <tr key={cartItems.productId}>
                                <td scope="row">
                                    <img className='cartImg' onClick={() =>  this.props.history.push(`/products/${cartItems.productId}`)} src={cartItems.thumbnail.url}/>
                                </td>
                                <td className='align-middle'>{cartItems.name}</td>
                                <td className='align-middle'><Money money={cartItems.each}/>
                                </td>
                                <td className='center align-middle'>{cartItems.quantity}
                                <div> 
                                {/* add up and down arrow here */}
                                <UpDownArrow/>         
                                </div>
                                </td>
                                <td className='align-middle'><Money money={cartItems.total}/></td>
                                <td className="center align-middle">

                                <i className="material-icons removeIcon" onClick={() => this.handleRemove(cartItems.itemId)}>
                                delete_forever
                                </i>
                                </td>
                            </tr>
                        )}
                    </tbody> 
                </table>
                 
                <div className='row'>
                <h3 className='col-md-8 text-right'>Cart Total:</h3>
                <h3 className='col-md-2 text-center'>{items}</h3>
                <h3 className='col-md-2 text-center'><Money money={cost}/></h3>
                </div>
                <div className='col text-center'>
                 <Link className='btn btn-primary btnCheckout' to='/checkout/guest'>Checkout As Guest</Link>
                 </div>
            </div>        
        )
    }
}

const mapStateToProps = state => {
    console.log('STATE CART ITEMS: ', state)
    return {
        cartItems: state.cart.items,
        cartTotals: state.cart.total
    };
}

export default connect(mapStateToProps, {
    getActiveCart: getActiveCart,
    removeProduct: removeProduct
})(Cart);





