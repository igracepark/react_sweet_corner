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
        const cartToken = await localStorage.getItem('sc-cart-token');
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
        const cartToken = await localStorage.getItem('sc-cart-token');
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
        console.log('get active cart', response.data);
    }
    catch (error) {
        console.log('Get Active Cart Error', error);
    }
}

export const getCartTotals = () => async dispatch => {
    try {
        const cartToken = await localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        };
        const response = await axios.get(`${url}/cart/totals`, axiosConfig);
        dispatch ({
            type: types.GET_CART_TOTALS, 
            payload: response.data.total
        })
    }
    catch (error) {
    console.log('Error getting cart totals:', error);
    }
}

export const createGuestOrder = guest => async dispatch => {
        try {
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
    const response = await axios.get(`${url}/orders/guest/${orderId}?email=${email}`, {
        // params: {
        //     email: email
        // }
    })
    dispatch({
        type: types.GET_GUEST_ORDER_DETAILS,
        orderDetails: response.data
    })
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
    try {
        const response = await axios.delete(`${url}/cart/items/${itemId}`, axiosConfig)
        // localStorage.setItem('sc-cart-token', response.data.cartToken);
    
        dispatch({
            type:  types.REMOVE_PRODUCT, 
        })

    } catch (error) {
        console.log("Error with remove product:", error);
    }
}

// export const getFullProducts = () => async dispatch => {
//     try {
//         const response = await axios.get(`${url}/products/full`);
//         dispatch({
//             type: types.GET_FULL_PRODUCTS,
//             fullProducts: response.data
//         })
//     }
//     catch(error) {
//         console.log('getAllProducts error: ', error);
//     }
// }

export const getSingleDetails = () => async dispatch => {
    try {
        const response = await axios.get(`${url}/products/${productId}`);
        dispatch({
            type: types.GET_SINGLE_DETAILS,
            payload: response.data
        })
    }
    catch(error) {
        console.log('getSingleDetails error: ', error);
    }
}





export const updateCartItemQuantity = () => async dispatch => {
    const cartToken = localStorage.getItem('sc-cart-token');
    const axiosConfig = {
        headers: {
            'X-Cart-Token': cartToken
        }
    };
    try {
        const response = await axios.patch((`${url}/cart/item/${itemId}`, 
        { quantity: quantity }, 
        axiosConfig));
        dispatch({
            type: types.UPDATE_CART_ITEM_QUANTITY,
            payload: response.data
        })
        console.log('UPDATE_CART_ITEM_QUANTITY RESPONSE', response);
    }
    catch(error) {
        console.log('updateCartItemQuantity  error: ', error);
    }
}

