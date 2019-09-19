import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clearProductDetails, getProductDetails} from '../../actions/index'
import './product_details.scss';
import Money from '../general/money';


class ProductDetails extends Component {
componentDidMount = () => {

 const productId =  this.props.match.params.product_id;
    this.props.getProductDetails(productId);
}

    //DESTRUCTURING
//     componentDidMount(){
//         const { getProductDetails, match: { params } } =                 this.props;
//         getProductDetails(params.product_id);
//     }
// }

    render() {
        const {details} = this.props;
        
        if (!details) {
            return (
                <div>
                    Loading Message
                </div>
            )
        } 
            return (
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
    clearProductDetails: clearProductDetails
}) (ProductDetails);