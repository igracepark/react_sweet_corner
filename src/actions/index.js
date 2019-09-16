import types from './types';
import axios from 'axios';

const url = 'http://api.sc.lfzprototypes.com'

export const getAllProducts = () => async dispatch => {
    try {
        const response = await axios.get(`${url}/api/products`);
        dispatch({
            type: types.GET_ALL_PRODUCTS,
            products: response.data.products
        })
    }
    catch(error) {
        console.log('getAllProducts error: ', error);
    }
}