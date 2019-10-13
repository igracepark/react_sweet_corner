import React, { Component } from "react";
import { getSingleDetails } from "../../actions";
import { connect } from "react-redux";

export class Nutrition extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        const productId = this.props.singleDetails.id;
        this.props.getSingleDetails(productId);
    };

    render() {
        if (!this.props.singleDetails) {
            return false;
        }

        const { dairy, gluten, nuts } = this.props.singleDetails.allergy;
        const { carbs, fat, sugar } = this.props.singleDetails.nutrition;

        return (
            <div>
                <div className="row">
                    <div className="col-md-3">Nutrition:</div>
                    <div className="col-md-3">Carbs: {carbs}</div>
                    <div className="col-md-3">Fat: {fat}</div>
                    <div className="col-md-3">Sugar: {sugar}</div>
                </div>
                <div className="row align-middle">
                    <div className="col-md-3">Allergy:</div>
                    <div className="col-md-3">
                        Dairy:{" "}
                        {dairy == true ? (
                            <i className="material-icons">check</i>
                        ) : (
                            <i className="material-icons">close</i>
                        )}
                    </div>
                    <div className="col-md-3">
                        Gluten:{" "}
                        {gluten == true ? (
                            <i className="material-icons">check</i>
                        ) : (
                            <i className="material-icons">close</i>
                        )}
                    </div>
                    <div className="col-md-3">
                        Nuts:{" "}
                        {nuts == true ? (
                            <i className="material-icons">check</i>
                        ) : (
                            <i className="material-icons">close</i>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        singleDetails: state.products.details,
    };
};

export default connect(
    mapStateToProps,
    {
        getSingleDetails: getSingleDetails,
    },
)(Nutrition);
