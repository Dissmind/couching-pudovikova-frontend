import React from 'react'
import './Title.css'

function Title(props) {
    return (
        <div className="Title">
            {props.content}
            {props.children}
        </div>
    )
}

export default Title
