import React from 'react'
import './PhoneNumber.css'

function PhoneNumber(props) {
    return (
        <div className="PhoneNumber">
            {props.content}
        </div>
    )
}

export default PhoneNumber