import React, {useState, useEffect} from 'react'
import OrderItem from './OrderItem';
import Preloader from '../layout/Preloader';

 const Orders = () => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getOrders()
        // eslint-disable-next-line
    }, [])

    const getOrders = async () => {
        setLoading(true)
        const res = await fetch('/order');
        const data = await res.json();

        setOrders(data);
        setLoading(false);
    }



    if(loading) {
        return <Preloader />
    }
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">New Orders</h4>
            </li>
            {!loading && orders.length === 0 ? <p className="Center">There are no orders...</p> : (
                orders.map(order => <OrderItem order={order} key={order.id} />)
            )}
        </ul>
    )
}

export default Orders;