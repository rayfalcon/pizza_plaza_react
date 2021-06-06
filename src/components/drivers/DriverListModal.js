import React, {useState, useEffect} from 'react'
import DriverItem from './DriverItem';

 const DriverListModal = () => {
    const [drivers, setDrivers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getDrivers()
        // eslint-disable-next-line
    }, [])

    const getDrivers = async () => {
        setLoading(true)
        const res = await fetch('/driver');
        const data = await res.json();

        setDrivers(data);
        setLoading(false);
    }


    return (
        <div id="driver-list-modal" className="modal">
            <div className="modal-content">
                <h4>Driver List</h4>
                <ul className="collection">
                    {!loading && drivers.map(driver => (
                        <DriverItem driver={driver} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DriverListModal;
