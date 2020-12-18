import React from 'react'
import './ButtonAppointment.css'

function ButtonAppointment(props) {
    return (
        <div className="ButtonAppointment">
            <div>
                {props.content}
            </div>
        </div>
    )
}

export default ButtonAppointment