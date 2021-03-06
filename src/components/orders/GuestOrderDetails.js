import React, { Component } from "react";
import { connect } from "react-redux";
import { getGuestOrderDetails } from "../../actions";
import { queryToObject } from "../../helpers";
import Money from "../general/money";
import "./order_details.scss";

class GuestOrderDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        const { match, location } = this.props;
        const orderId = match.params.order_id;
        const query = queryToObject(location.search);
        this.props.getGuestOrderDetails(orderId, query.email);
    };

    componentDidCatch = error => {
        console.log("error from component did catch: ", error);
    };

    render() {
        if (!this.props.details) {
            return false;
        }

        const { status, id, createdAt, itemCount, total, items } = this.props.details;
        let dateFormat = new Date(createdAt).toLocaleString();

        return (
            <div>
                <h1 className="center">Guest Order Details</h1>
                <h1 className="center status">Status: {status}</h1>
                <h3 className="center order">Order #: {id}</h3>
                <div className="center">**Save order number to check order status in the future**</div>
                <h5>Order Placed: {dateFormat}</h5>
                <h5>Order Total Items: {itemCount}</h5>
                <h5 className="inline1">
                    Order Total Cost: <Money money={total} />
                </h5>
                <h3>Order Items:</h3>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Product</th>
                            <th scope="col">Each</th>
                            <th scope="col" className="center">
                                Quantity
                            </th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {items &&
                            items.map(cartItems => (
                                <tr key={cartItems.id}>
                                    <td scope="row">
                                        <img className="cartImg" src={cartItems.product.thumbnail.url} />
                                    </td>
                                    <td className="align-middle">{cartItems.product.name}</td>
                                    <td className="align-middle">
                                        <Money money={cartItems.each} />
                                    </td>
                                    <td className="center align-middle">{cartItems.quantity}</td>
                                    <td className="align-middle">
                                        <Money money={cartItems.total} />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>

                <div className="row">
                    <h3 className="col-md-8 text-right">Order Total:</h3>
                    <h3 className="col-md-2 text-center">{itemCount}</h3>
                    <h3 className="col-md-2 text-center">
                        <Money money={total} />
                    </h3>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        details: state.orders.details,
    };
};

export default connect(
    mapStateToProps,
    {
        getGuestOrderDetails: getGuestOrderDetails,
    },
)(GuestOrderDetails);
