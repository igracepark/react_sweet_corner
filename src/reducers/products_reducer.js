import types from '../actions/types';

const DEFAULT_STATE = {
    list: [],
    details: null
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.GET_ALL_PRODUCTS:
            return {
                ...state, 
                list: action.products
            }
            // Update the switch statement inside the productsReducer to handle your newly created GET_PRODUCT_DETAILS action. Update the details property of the state with the product details
        case types.GET_PRODUCT_DETAILS:
            return {
                ...state, 
                details: action.product
            }

        default:
            return state;
    }
}