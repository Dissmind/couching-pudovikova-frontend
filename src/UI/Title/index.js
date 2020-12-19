import React from "react";
import MainTitle from "./MainTitle/MainTitle";
import HorizontalRule from "./HorizontalRule/HorizontalRule";

function Title(props) {
    return (
        <div className="Title">
            <MainTitle content={props.content}
                       fontSize={props.fontSize}
                       color={props.color}
                       marginBottom={props.marginBottom}
            />
            <HorizontalRule width={props.width}
                            color={props.color}
            />
        </div>
    )
}

export default Title