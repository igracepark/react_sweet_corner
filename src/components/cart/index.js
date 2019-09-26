import React, {Component} from 'react';
import './cart.scss';
import {connect} from 'react-redux';
import {getActiveCart} from '../../actions/index';
import Money from '../general/money';
import { Link } from 'react-router-dom';

class Cart extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount = () => {
        this.props.getActiveCart();
    }

    componentDidCatch = (error) => {
        console.log("error from component did catch: ", error)
    }

    render() {
        // console.log("this.props.cartItems in render",this.props.cartItems)
        
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
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.cartItems && this.props.cartItems.map(cartItems => 
                            <tr key={cartItems.productId}>
                                <td scope="row">
                                    <img className='cartImg' src={cartItems.thumbnail.url}/>
                                </td>
                                <td className='align-middle'>{cartItems.name}</td>
                                <td className='align-middle'>{Money(cartItems.each)}</td>
                                <td className='center align-middle'>{cartItems.quantity}
                                {/* <div> 
                                <i className="material-icons">arrow_drop_up</i>
                                <i className="material-icons">arrow_drop_down</i>
                                </div> */}
                                </td>
                                <td className='align-middle' key={cartItems.productId}>{Money(cartItems.total)}</td>
                            </tr>
                        )}
                    </tbody>        
                </table>
                <div className='row'>
                <h3 className='col-md-8 text-right'>Cart Total:</h3>
                <h3 className='col-md-2 text-center'>{items}</h3>
                <h3 className='col-md-2 text-center'>{Money(cost)}</h3>
                </div>
                <div className='col text-center'>
                 <Link className='btn btn-primary btnCheckout' to='/checkout/guest'>Checkout As Guest</Link>
                 </div>
            </div>        
        )
    }
}

const mapStateToProps = state => {
    console.log('STATE CART ITEMS: ', state.cart.items)
    return {
        cartItems: state.cart.items,
        cartTotals: state.cart.total 
    };
}

export default connect(mapStateToProps, {
    getActiveCart: getActiveCart,
})(Cart);





