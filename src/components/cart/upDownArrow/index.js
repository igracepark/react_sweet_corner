import React, { Component } from "react";
import { connect } from "react-redux";
import "./upDownArrow.scss";
import { updateCartItemQuantity } from "../../../actions";

class UpDownArrow extends Component {
    constructor(props) {
        super(props);

        // this.state = {

        // }
    }

    componentDidMount = () => {
        // const productId =  this.props.match.params.product_id;
        // this.props.updateCartItemQuantity(productId);
        // console.log('upanddownarrow this.props.match ',  this.props);
    };

    incrementCartItem = () => {
        // add function here to add 1 to product quantity
    };

    decrementCartItem = () => {
        // add function here to subtract 1 to product quantity
    };

    render() {
        return (
            <div>
                <i onClick={() => console.log("up arrow clicked")} className="material-icons">
                    arrow_drop_up
                </i>
                <i onClick={() => console.log("down arrow clicked")} className="material-icons">
                    arrow_drop_down
                </i>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     console.log("STATE UP AND DOWN ARROW: ", state);
//     return {
//         details: this.state.details,
//     };
// };

export default connect(
    null,
    {
        updateCartItemQuantity: updateCartItemQuantity,
    },
)(UpDownArrow);

// productid of upanddown arrow needs to match with getactivecart product id
// if match, then += 1 to that product quantity
// this.state = quantity (current)
// increment function
// decrement function
// send new quantity with axios request
