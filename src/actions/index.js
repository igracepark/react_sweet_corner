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