import React, { Component } from "react";
import "./checkout.scss";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createGuestOrder } from "../../actions";

class GuestCheckout extends Component {
    handleGuestCheckout = async formValues => {
        const orderInfo = await this.props.createGuestOrder(formValues);
        const redirectUrl = `/orders/guest/${orderInfo.orderId}?email=${orderInfo.email}`;
        this.props.history.push(redirectUrl);
    };

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="guest-checkout">
                <h1 className="center">Guest Checkout</h1>
                <form className="center" onSubmit={handleSubmit(this.handleGuestCheckout)}>
                    <div className="input-field">
                        <Field
                            name="firstName"
                            component="input"
                            placeholder="First Name"
                            type="text"
                            className="guestInputField"
                            pattern="([A-Za-z ]+)"
                            required
                        />
                    </div>
                    <div className="input-field">
                        <Field
                            name="lastName"
                            component="input"
                            placeholder="Last Name"
                            type="text"
                            className="guestInputField"
                            pattern="([A-Za-z ]+)"
                            required
                        />
                    </div>
                    <div className="input-field">
                        <Field
                            name="email"
                            component="input"
                            autoComplete="email"
                            placeholder="Email"
                            className="guestInputField"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required
                        />
                    </div>
                    <div className="form-actions">
                        <button className="button guestButton">Submit Order</button>
                    </div>
                </form>
            </div>
        );
    }
}

GuestCheckout = reduxForm({
    form: "checkout-form",
})(GuestCheckout);
export default connect(
    null,
    {
        createGuestOrder: createGuestOrder,
    },
)(GuestCheckout);
