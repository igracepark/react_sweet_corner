import React, {Component} from 'react';
// import {connect} from 'react-redux';
import './upDownArrow.scss';

class UpDownArrow extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }


 incrementCartItem = () => {

 }   

render() {

return(
    <div>
        <i className="material-icons">arrow_drop_up</i>
        <i className="material-icons">arrow_drop_down</i>
    </div>
)
}
}





export default UpDownArrow;


// productid of upanddown arrow needs to match with getactivecart product id
// if match, then += 1 to that product quantity 
// this.state = quantity (current)
// increment function
// decrement function
// send new quantity with axios request

