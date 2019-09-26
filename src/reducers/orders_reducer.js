import types from '../actions/types';

const DEFAULT_STATE = {
    details: null
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {

case types.GET_GUEST_ORDER_DETAILS:
    console.log('ACTION', action.orderDetails);
    return {
        ... state,
        details: action.orderDetails
    }

        default:
                return state;
    }
}