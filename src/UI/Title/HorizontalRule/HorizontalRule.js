import React from 'react'
import './HorizontalRule.css'

function HorizontalRule(props) {
    return (
        <div className="HorizontalRule">
            <hr style={{
                width: props.width,
                backgroundColor: props.color,
                border: `1px solid ${props.color}`
            }} />
        </div>
    )
}

export default HorizontalRule