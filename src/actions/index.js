import types from './types';
import axios from 'axios';

const url = 'http://api.sc.lfzprototypes.com/api'

export const getAllProducts = () => async dispatch => {
    try {
        const response = await axios.get(`${url}/products`);
        dispatch({
            type: types.GET_ALL_PRODUCTS,
            products: response.data.products
        })
    }
    catch(error) {
        console.log('getAllProducts error: ', error);
    }
}

export const getProductDetails = productId => async dispatch => {
    try {
        const response = await axios.get(`${url}/products/${productId}`);
        dispatch({
            type: types.GET_PRODUCT_DETAILS, 
            product: response.data
        })
    } 
    catch(error) {
        console.log('getAllProducts error: ', error);
    }
}

export const clearProductDetails = () => {
    return {
            type: types.CLEAR_PRODUCT_DETAILS
        }
}

export const addItemToCart = (productId, quantity) => async (dispatch) => {
    try{
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        }
        const response = await axios.post(`${url}/cart/items/${productId}`, {
            quantity: quantity
        },  axiosConfig);
        localStorage.setItem('sc-cart-token', response.data.cartToken);
        // The type property represents the action type and the cartTotal property contains the cart totals we get back from the axios request.
        dispatch({
            type: types.ADD_ITEM_TO_CART, 
            cartTotal: response.data.total
        })
    
    } catch (error) {
        console.log('Add Item To Cart Error', error);
    }
}

export const getActiveCart = () => async dispatch => {
    try {
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        };
        const response = await axios.get(`${url}/cart`, axiosConfig);
        dispatch ({
            type: types.GET_ACTIVE_CART, 
            cart: response.data
        })
    }
    catch (error) {
        console.log('Get Active Cart Error', error);
    }
}

export const getCartTotals = () => async dispatch => {
    try {
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        };
        const response = await axios.get(`${url}/cart/totals`, axiosConfig);
        dispatch ({
            type: types.GET_CART_TOTALS, 
            cart: response.data.total
        })
        console.log('get cart totals response', response.data.total);
    }
    catch {
    console.log('Error getting cart totals:', error);
    }
}