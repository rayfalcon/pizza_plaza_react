import React from 'react'
import Moment from 'react-moment';
import PropTypes from 'prop-types'

const OrderItem = ({order}) => {
    return (
        <li className="collection-item">
            <div>
                <a href="#edit-order-modal" className={`modal-trigger ${order.is_ordered ? 'red-text' : 'blue-text'}`}> {order.message}</a>
            </div>
            <br />
            <span className="grey-text">
                <span className="black-text">{order.title}</span> assigned driver: <span className="black-text">{order.driver}</span>
                 on <Moment format="MMMM Do YYYY, h:mm:ss a">{order.date}</Moment>
            </span>
            <a href="#!" className="secondary-content">
                <i className="material-icons grey-text">delete</i>
            </a>
           
        </li>
    )
}

OrderItem.propTypes = {
    order: PropTypes.object.isRequired,
}
export default OrderItem;