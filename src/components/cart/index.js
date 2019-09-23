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

    render() {
        // console.log('Cart Items-A:', this.props.cartItems);
        // console.log('Cart Total-A: ', this.props.cartTotals);

        if (!this.props.cartTotals) {
            return false;
            } 
            const {cost, items} = this.props.cartTotals;

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
                            <tr>
                                <td scope="row">
                                    <img className='cartImg' src={cartItems.thumbnail.url}/>
                                </td>
                                <td className='align-middle' key={cartItems.productId}>{cartItems.name}</td>
                                <td className='align-middle' key={cartItems.productId}>{Money(cartItems.each)}</td>
                                <td className='center align-middle' key={cartItems.productId}>{cartItems.quantity}</td>
                                <td className='align-middle' key={cartItems.productId}>{Money(cartItems.total)}</td>
                            </tr>
                        )}
                    </tbody>        
                </table>
                <div className='row'>
                <h3 className='col-md-8 text-right'>Cart Total:</h3>
                <h3 className='col-md-2 text-center'>{items}</h3>
                <h3 className='col-md-2 text-right'>{Money(cost)}</h3>
                </div>
                <div className='col text-center'>
                 <Link className='btn btn-primary btnCheckout' to='/checkout/guest'>Checkout As Guest</Link>
                 </div>
            </div>        
        )
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.items,
        cartTotals: state.cart.total 
    };
}

export default connect(mapStateToProps, {
    getActiveCart: getActiveCart,
})(Cart);





