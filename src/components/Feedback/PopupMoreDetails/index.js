import React from "react";
import './style.css'

export const PopupMoreDetails = (props) => (
    <>
        <div className="PopupBackground" onClick={props.close} />

        <div className="PopupMoreDetails">
            <div className="Info">
                <img className="Photo" src={props.img} alt="qwe"/>
                <div className="Content">
                    <div className="Title">
                        <div className="Name">{props.title}</div>
                        <div className="Date">{props.date}</div>
                    </div>
                    <div className="Description">{props.content}</div>
                </div>
            </div>
        </div>
    </>
)