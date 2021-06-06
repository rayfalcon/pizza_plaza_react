import { setLoading } from './orderActions';
import { GET_DRIVERS, ADD_DRIVER, DELETE_DRIVER, DRIVERS_ERROR } from './types';

export const getDrivers = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/driver');
        const data = await res.json();

        dispatch({
            type: GET_DRIVERS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: DRIVERS_ERROR,
            payload: err.response.setText
        })
    }
}

// add new Driver to the server
export const addDriver = (driver) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/driver' {
            method: 'POST',
            body: JSON.stringify(driver),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_DRIVER,
            payload: data
        })
    } catch(err) {
        dispatch({
            type: DRIVERS_ERROR,
            payload: err.response.setText
        })
    }
}

// Delete Driver from server
export const deleteDriver = (id) => async dispatch => {
    try {
        setLoading();

        await fetch(`/driver/${id}`, {
            method: 'DELETE'
        });

        dispatch ({
            type: DELETE_DRIVER,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: DRIVERS_ERROR,
            payload: err.response.statusText
        });
    }
}