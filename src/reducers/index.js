import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import productsReducer from './products_reducer';



const rootReducer = combineReducers({
    form: formReducer, 
    products: productsReducer
});

export default rootReducer;

