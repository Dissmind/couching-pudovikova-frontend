import React from 'react'
import './MainTitle.css'

function MainTitle(props) {
    return (
        <div className="MainTitle" style={{
            fontSize: props.fontSize,
            color: props.color,
            marginBottom: props.marginBottom
        }}>
            {props.content}
        </div>
    )
}

export default MainTitle