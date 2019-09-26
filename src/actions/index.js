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
        // console.log('get cart totals response', response.data.total);
    }
    catch (error) {
    console.log('Error getting cart totals:', error);
    }
}

export const createGuestOrder = guest => async dispatch => {
        try {
            // console.log('Create guest order, guest data:', guest);
            const cartToken = localStorage.getItem('sc-cart-token');
            const axiosConfig = {
                headers: {
                    'X-Cart-Token': cartToken
                }
            };
            const response = await axios.post(`${url}/orders/guest`,
        guest, axiosConfig);
       
                localStorage.setItem('sc-cart-token', response.data.cartToken);
                localStorage.clear();
                dispatch({
                    type: types.CREATE_GUEST_ORDER, 
                    order: {
                        id: response.data.guest,
                        message: response.data.message
                    }
                })
                return {
                    email: guest.email,
                    orderId: response.data.id
                };
            } catch (error) {
            console.log('Error with guest checkout:', error);
    }
}


export const getGuestOrderDetails = (orderId, email) => async dispatch => {
try {
    const response = await axios.get(`${url}/orders/guest/${orderId}`, {
        params: {
            email: email
        }
    })
    dispatch({
        type: types.GET_GUEST_ORDER_DETAILS,
        orderDetails: response.data
    })
    console.log('RESPONSE: ', response.data);
}
    catch (error) {
        console.log('Error with guest order details:', error);
}
}

export const removeProduct = (itemId) => async (dispatch) => {
    const cartToken = localStorage.getItem('sc-cart-token');
    const axiosConfig = {
        headers: {
            'X-Cart-Token': cartToken
        }

    };
    console.log(axiosConfig)
    try {
        const response = await axios.delete(`${url}/cart/items/${itemId}`, axiosConfig)
        // localStorage.setItem('sc-cart-token', response.data.cartToken);
    
        dispatch({
            type:  types.REMOVE_PRODUCT, 
            // getActiveCart()
            // remove: response.data
        })
        console.log('REMOVE RESPONSE', response);

    } catch (error) {
        console.log("Error with remove product:", error);
    }
}

