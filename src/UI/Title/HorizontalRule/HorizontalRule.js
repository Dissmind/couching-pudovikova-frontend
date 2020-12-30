import React from 'react'
import './HorizontalRule.css'

function HorizontalRule(props) {
    return (
        <div className="HorizontalRule" style={{borderBottom: `3px solid ${props.color}`, width: props.width, borderRadius: `10px`}} />
    )
}

export default HorizontalRule