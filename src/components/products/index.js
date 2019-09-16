import React, {Component} from 'react';
import './products.scss';
import {connect} from 'react-redux';
import {getAllProducts} from '../../actions';

class Products extends Component {
    componentDidMount = () => {
        this.props.getAllProducts();
}

    render() {
        const {products} = this.props;
        console.log('products: ', products);
        return (
            <div className='products'>
                <h1 className='center'>
                    Products
                </h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.list
    };
}

export default connect(mapStateToProps, {
    getAllProducts: getAllProducts
}) (Products);
