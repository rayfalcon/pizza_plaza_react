import {GET_ORDERS, SET_LOADING, ORDERS_ERROR, ADD_ORDER, DELETE_ORDER, UPDATE_ORDER, SET_CURRENT, CLEAR_CURRENT, SEARCH_ORDERS} from '../actions/types';

const initialState = {
    orders: null,
    current: null, 
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload,
                loading: false
            }
        case ADD_ORDER:
            return {
                ...state,
                orders: state.orders.filter(order => order.id !== action.payload),
                loading: false
            }
        case UPDATE_ORDER: 
            return {
                ...state,
                orders: state.orders.map(order => order.id === action.payload.id ? action.payload : order)
            }
        case SEARCH_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            }
        case ORDERS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
}