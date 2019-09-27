import React, {Component} from 'react';
import {getFullProducts} from '../../actions';
import {connect} from 'react-redux';

export class Nutrition extends Component {
    constructor(props) {
        super(props);
      }

allergyCheck = (carbs, fat, sugar) => {

}

      componentDidMount = () => {
        this.props.getFullProducts();
        }

        render() {
            if (!this.props.fullProducts) {
                return (
                    <div>
                    Loading Message
                    </div>
                )
            }

            console.log('FULL PRODUCTS: ', this.props.fullProducts);
            const {dairy, gluten, nuts} = this.props.fullProducts.allergy;
            const {carbs, fat, sugar} = this.props.fullProducts.nutrition;
            console.log('DAIRY', dairy);
        
            return (
                <div>
                <div>Nutrition</div>
                <div>Carbs: {carbs}</div>
                <div>Fat: {fat}</div>
                <div>Sugar: {sugar}</div>
                <div>Allergy</div>
                <div>Dairy: {dairy}</div>
                <div>Gluten: {gluten}</div>
                <div>Nuts: {nuts}</div>
                </div>
            )
        }
    }

    const mapStateToProps = state => {
        console.log('state products details', state.products.details);
             return {
                fullProducts: state.products.details
    };
}

    export default connect(mapStateToProps, {
        getFullProducts: getFullProducts,
    })(Nutrition);
    