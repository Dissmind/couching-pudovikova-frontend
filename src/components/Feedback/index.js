import React, {useState} from "react";
import "./style.css"
import Title from "../../UI/Title";
import {FeedbackCard} from "../../UI/FeedbackCard";
import feedbackImage1 from "../../attachments/img/feedbackImage1.png"
import feedbackImage2 from "../../attachments/img/feedbackImage2.png"
import feedbackImage3 from "../../attachments/img/feedbackImage3.png"
import {PopupFeedback} from "./Popup";

export const Feedback = () => {

    const [popupToggle, setPopupToggle] = useState(false)

    const popupClose = () => {
        setPopupToggle(false)
    }

    return (
        <div className="Feedback">


            {
                (popupToggle) ? <PopupFeedback close={popupClose}/> : null
            }

            <Title
                content="Отзывы"
                fontSize="45px"
                color="#952D31"
                marginBottom="15px"
                width="230px"
            />

            <div className="FeedbackCardBlock">
                <FeedbackCard
                    title="Анна Гленко"
                    img={feedbackImage1}
                    content="Что постоянный количественный рост и сфера нашей активности..."
                    date="18.06.2020"
                />
                <FeedbackCard
                    title="Мария Крафт"
                    img={feedbackImage2}
                    content="Что постоянный количественный рост и сфера нашей активности..."
                    date="18.06.2020"
                    marginLeft="75px"
                    marginRight="75px"
                />
                <FeedbackCard
                    title="Михаил Луков"
                    img={feedbackImage3}
                    content="Что постоянный количественный рост и сфера нашей активности..."
                    date="18.06.2020"
                />
            </div>

            <div
                onClick={() => {setPopupToggle(true)}}
                className="ButtonAddFeedback"
            >Оставить отзыв</div>
        </div>
    )
}