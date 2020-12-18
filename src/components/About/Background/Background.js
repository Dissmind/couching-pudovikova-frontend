import React from 'react'
import './Background.css'

function Background(props) {
    return (
        <div className="Background">
            {props.children}
        </div>
    )
}

export default Background