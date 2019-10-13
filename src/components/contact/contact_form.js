import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import "../general/form/form.scss";
// import Input from "../general/form/input";
import Textarea from "../general/form/textarea";

class SimpleForm extends Component {
    handleFormSubmit(formValues) {
        console.log("On Submit Simple Form Values:", formValues);
    }

    resetForm() {
        this.props.reset();
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="text-right">
                <h4 className="brown">Contact Form</h4>
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                    <div className="input-field">
                        <Field
                            name="name"
                            component="input"
                            placeholder="Name"
                            type="text"
                            className="inputField"
                            pattern="([A-Za-z ]+) ([A-Za-z ]+)"
                            required
                        />
                    </div>
                    <div className="input-field">
                        <Field
                            name="email"
                            component="input"
                            autoComplete="email"
                            placeholder="Email"
                            className="inputField"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required
                        />
                    </div>
                    <div className="input-field">
                        <Field
                            name="phone"
                            component="input"
                            type="number"
                            autoComplete="phone"
                            placeholder="Phone"
                            className="inputField"
                            pattern=".{10,}"
                            required
                        />
                    </div>
                    <div className="input-field">
                        <Field
                            name="subject"
                            component="input"
                            placeholder="Subject"
                            type="text"
                            className="inputField"
                            required
                        />
                    </div>
                    <div>
                        <Textarea />
                    </div>

                    <div className="form-actions">
                        <button className="button">Send</button>
                        <button className="button" onClick={this.resetForm.bind(this)} type="reset">
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: "simple-form",
})(SimpleForm);
