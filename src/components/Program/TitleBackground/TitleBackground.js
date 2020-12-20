import React from "react";
import './TitleBackground.css'

function TitleBackground(props) {
    return(
        <div className="TitleBackground">
            {props.children}
        </div>
        )
}

export default TitleBackground