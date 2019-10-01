import React, {Component} from 'react';
import {getFullProducts} from '../../actions';
import {connect} from 'react-redux';

export class Nutrition extends Component {
    constructor(props) {
        super(props);
      }

      componentDidMount = () => {
        this.props.getFullProducts();
        }

        render() {
            if (!this.props.fullProducts) {
                return false;
            }

            console.log('FULL PRODUCTS: ', this.props.fullProducts);
            const {dairy, gluten, nuts} = this.props.fullProducts.allergy;
            const {carbs, fat, sugar} = this.props.fullProducts.nutrition;
         
        
            return (
                <div>
                    <div className='row'>
                        <div className='col-md-3'>Nutrition:</div>
                        <div className='col-md-3'>Carbs: {carbs}</div>
                        <div className='col-md-3'>Fat: {fat}</div>
                        <div className='col-md-3'>Sugar: {sugar}</div>
                        </div>
                        <div className='row align-middle'>
                        <div className='col-md-3'>Allergy:</div>
                        <div className='col-md-3'>
                            Dairy: {dairy == true ?  
                            <i className="material-icons">check</i> : 
                            <i className="material-icons">close</i>}
                        </div>
                        <div className='col-md-3'>
                            Gluten: {gluten == true ?  
                            <i className="material-icons">check</i> : 
                            <i className="material-icons">close</i>}
                        </div>
                        <div className='col-md-3'>
                            Nuts: {nuts == true ?   
                            <i className="material-icons">check</i> : 
                            <i className="material-icons">close</i>}
                        </div>
                    </div>
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
    