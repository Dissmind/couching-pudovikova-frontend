import React from 'react'

function Image(props) {
    return (
        <img src={props.imageName} style={{
            marginLeft: props.marginLeft,
            marginRight: props.marginRight
        }} alt="img" className="Image" />
    )
}

export default Image