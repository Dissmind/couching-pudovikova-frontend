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
                    content={`Курс крайне необычный по многим аспектам: содержанию, структуре, информационному наполнению. Особенно запомнились практические игры, где наш тренер и куратор Елена воссоздавала определённую сложную ситуацию во время диалога "Продавец - клиент". И мы должны были "наклонить чашу весов в свою пользу, переманить к себе клиента, сделать его лояльным к себе и компании. Это очень трудоёмкая задача, но благодаря этому курсу, я теперь чувствую себя увереннее и готов к неожиданностям при выстраивании отношений с покупателем/клиентом. Желаю Елене крепкого здоровья и профессионального развития в последующих начинаниях!`}
                    date="18.06.2020"
                />
                <FeedbackCard
                    title="Мария Крафт"
                    img={feedbackImage2}
                    content={`Лена, ты очень хороший руководитель! Ты очень многому меня научила, например, как правильно делать презентацию, как правильно выявить потребность клиента и как сделать продажу и ещё не одну продажу. Ты человек который всегда поможет в трудную минуту никогда не оставит в беде всегда поможет решить какой-нибудь вопрос, всегда шла к своим целям и добивалась их! Ты очень умная, трудолюбивая и целеустремленная! Все сделала чтоб в нашем коллективе царила дружба и понимание! Я очень рада что нам довелось судьбой с тобой познакомиться и поработать в одной компании.`}
                    date="18.06.2020"
                    marginLeft="75px"
                    marginRight="75px"
                />
                <FeedbackCard
                    title="Михаил Луков"
                    img={feedbackImage3}
                    content={`Обучение для меня было познавательным, узнала много интересного про техники продаж. Материал доступный для понимания, преподносился на доступном языке. На все мои вопросы получала развернутые ответы. В целом обучение проходило легко и интересно. Атмосфера была душевная. Тренер открытый и отзывчивый. Очень интересно преподносил информацию. Буду применять полученный опыт в дальнейшей работе.`}
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