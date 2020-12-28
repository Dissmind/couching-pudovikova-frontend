import React, {useState} from "react";
import './style.css'
import {PopupMoreDetails} from "../../components/Feedback/PopupMoreDetails";

export const FeedbackCard = (props) => {

    const [popupMoreDetailsToggle, setPopupMoreDetailsToggle] = useState(false)

    const popupMoreDetailsClose = () => {
        setPopupMoreDetailsToggle(false)
    }

    return (
        <div className="FeedbackCard" style={{marginLeft: props.marginLeft, marginRight: props.marginRight}}>

            {
                (popupMoreDetailsToggle) ? <PopupMoreDetails
                    title={props.title}
                    date={props.date}
                    content={`"` + props.content + `"`}
                    img={props.img}
                    close={popupMoreDetailsClose}
                /> : null
            }

            <div className="FeedbackCardTitle">{props.title}</div>
            <img className="FeedbackCardImage" src={props.img} alt="feedbackImage"/>
            <div className="FeedbackCardContent">
                {(props.content.length > 90) ?
                    (`"` + props.content.slice(0, 90) + `..."`) :
                    (`"` + props.content + `"`)}
            </div>
            <div className="FeedbackCardButtonMore" onClick={() => {setPopupMoreDetailsToggle(true)}}>Подробнее</div>
            <div className="FeedbackCardDate">{props.date}</div>
        </div>
    )
}