import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.js';

const AddOrderModal = () => {
    const [message, setMessage] = useState('')
    const [isOrdered, setIsOrdered] = useState(false)
    const [driver, setDriver] = useState('')

    const onSubmit = () => {
        if(message === '' || driver === ''){
            M.toast({html: "Please enter a message and a driver"})
        } else {
            console.log(message, isOrdered, driver)
        }
        
        // clear fields
        setMessage('')
        setIsOrdered(false)
        setDriver('')
    }

    return (
        <div id="add-order-modal" className="modal" style={{modalStyle}}>
            <div className="modal-content">
                <h4>Enter New Order</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className="active">
                            Order Message
                        </label>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <select name="driver" value={driver} className="browser-default" onChange={e => setDriver(e.target.value)}>
                                <option value="" disabled>Select Driver</option>
                                <option value="John Doe" >John Doe</option>
                                <option value="Jody Montgomery">Jody Montgomery</option>
                                <option value="John Lewis">John Lewis</option>
                                <option value="Tim Matthews">Tim Matthews</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field">
                            <p>
                                <label>
                                    <input type="checkbox" 
                                    className="filled-in" 
                                    checked={isOrdered} 
                                    value={isOrdered} 
                                    onChange={e => setIsOrdered(e.target.value)}
                                    />
                                    <span>Not Delivered</span>
                                </label>
                            </p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" onClick={onSubmit} className="modal-close waves-effect green btn">Enter</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const modalStyle = {
    width: "75%",
    height: "75%"
}

export default AddOrderModal