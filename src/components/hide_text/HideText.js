import React, { Component } from "react";
import "./hide_text.scss";

export default class HideText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textDisplay: "false",
        };
    }

    ToggleButton() {
        this.setState(currentState => ({
            textDisplay: !currentState.textDisplay,
        }));
    }

    render() {
        return (
            <div>
                <button className="hideButton" onClick={() => this.ToggleButton()}>
                    Nutrition
                </button>
                {!this.state.textDisplay && this.props.text}
            </div>
        );
    }
}
