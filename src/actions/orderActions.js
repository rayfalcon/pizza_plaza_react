import { GET_ORDERS, SET_LOADING, ORDERS_ERROR, ADD_ORDER, DELETE_ORDER, UPDATE_ORDER, SET_CURRENT, CLEAR_CURRENT, SEARCH_ORDERS} from './types';


// get orders from the server
export const getOrders = () => async dispatch => {
    try {
       setLoading();

       const res = await fetch('/order')
       const data = await res.json()

       dispatch({
           type: GET_ORDERS,
           payload: data
       })
    } catch (err) {
        dispatch({
            type: ORDERS_ERROR,
            payload: err.response.statusText
        })
    }
}

// add new order to the server
export const addOrder = (order) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/order', {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json()

        dispatch({
            type: ADD_ORDER,
            payload: data
        })
    } catch(err) {
        dispatch({
            type: ORDERS_ERROR,
            payload: err.response.statusText
        });
    }
}

// Delete order from server
export const deleteOrder = (id) => async dispatch => {
    try {
        setLoading();

            await fetch(`/order/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_ORDER,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: ORDERS_ERROR, 
            payload: err.response.statusText
        });
    }
}

// update Order
export const updateOrder = (order) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`/order/${order.id}`, {
            method: 'PUT',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_ORDER,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ORDERS_ERROR,
            payload: err.response.statusText
        });
    }
}

// Search Orders
export const searchOrders = (text) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`/order?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_ORDERS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ORDERS_ERROR,
            payload: err.response.statustext
        });
    }
}

// Set current Order
export const setCurrent = (order) => {
    return {
        type: SET_CURRENT,
        payload: order
    }
}

// clear current Order
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}