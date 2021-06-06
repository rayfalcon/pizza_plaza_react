import React from 'react'
import PropTypes from 'prop-types';

const DriverItem = ({driver}) => {
    return (
        <li className="collection-item">
            <div>
                {driver.first_name} {driver.last_name} 
                <a href="#!" className="secondary-content">
                <i className="material-icons grey-text">delete</i>
                </a>
            </div> 
        </li>
    )
}

DriverItem.propTypes = {
    driver: PropTypes.object.isRequired
}

export default DriverItem;
