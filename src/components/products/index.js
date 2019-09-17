import React, {Component} from 'react';
import './products.scss';
import {connect} from 'react-redux';
import {getAllProducts} from '../../actions';
import ProductItem from './product_item';
import './products.scss';

class Products extends Component {
    componentDidMount = () => {
        this.props.getAllProducts();
}

    render() {
        const {products} = this.props;
        console.log('products: ', products);

        // In the render method map over the products array, to create an array of ProductItem components. Use the spread, ..., operator to pass every key of the product object into the <ProductItem> component as a prop. Use the product id to set the key prop. Remember to save the array of <ProductItem /> components into a constant

        const productItems = products.map((product) => {
            return <ProductItem {...product} key={Products.id}/>
});

        return (
            <div className='products bg-1'>
                <h3 className='center'>
                   Cupcakes
                   </h3>
                <div className='row'>
                    {productItems}
                    </div>
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
