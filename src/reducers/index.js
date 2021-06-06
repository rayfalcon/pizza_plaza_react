import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import driverReducer from './driverReducer';

export default combineReducers({
    order: orderReducer, 
    driver: driverReducer
});
