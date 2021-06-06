import {
    GET_DRIVERS,
    ADD_DRIVER,
    DELETE_DRIVER,
    SET_LOADING,
    DRIVERS_ERROR
} from '../actions/types';

const initialState = {
    drivers: null, 
    loading: false, 
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_DRIVERS:
            return {
                ...state,
                drivers: action.payload,
                loading: false
            }
        case ADD_DRIVER: 
            return {
                ...state,
                drivers: action.payload,
                loading: false
            }
        case DELETE_DRIVER:
            return {
                ...state,
                drivers: state.drivers.filter(driver => driver.id !== action.payload)
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case DRIVERS_ERROR:
            console.log(action.payload)
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}