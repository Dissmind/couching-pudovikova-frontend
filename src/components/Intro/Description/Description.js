import React from 'react'
import './Description.css'

function Description(props) {
    return (
        <div className="Description">
            {props.content}
        </div>
    )
}

export default Description