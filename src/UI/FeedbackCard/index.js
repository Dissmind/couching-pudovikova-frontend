import React from "react";
import './style.css'

export const FeedbackCard = (props) => (
    <div className="FeedbackCard" style={{marginLeft: props.marginLeft, marginRight: props.marginRight}}>
        <div className="FeedbackCardTitle">{props.title}</div>
        <img className="FeedbackCardImage" src={props.img} alt="feedbackImage" />
        <div className="FeedbackCardContent">"{props.content}"</div>
        <div className="FeedbackCardButtonMore">Подробнее</div>
        <div className="FeedbackCardDate">{props.date}</div>
    </div>
)