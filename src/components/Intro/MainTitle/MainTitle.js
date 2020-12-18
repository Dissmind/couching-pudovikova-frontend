import React from 'react'
import './MainTitle.css'

function MainTitle(props) {
    return (
        <div className="MainTitle">
            {props.content}
        </div>
    )
}

export default MainTitle