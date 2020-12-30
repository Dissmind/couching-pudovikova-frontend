import Background from "./Background/Background";
import React from "react";
import './style.css'
import Title from "../../UI/Title";
import aboutImage from '../../attachments/img/elena.jpg'

export const About = () => (
    <div className="About">
        <Background />
        <Title
            content="Обо мне"
            fontSize="45px"
            color="#FEFEFE"
            width="280px"
            marginBottom="15px"
        />
        <div className="InfoBlock">
            <div className="Image">
                <img src={aboutImage} width={'80%'} alt="aboutImage" className="AboutImage" />
            </div>
            <div className="Info">
                <p>Меня зовут Елена.</p>
                <p>Посвятила продажам и управлению более 10 лет.
                <br />Я прошла путь от менеджера по продажам до руководителя городами.
                <br />Я знаю, как завоевать клиента навсегда.
                <br />Я знаю, что продажи изменились и наступило время менять подходы и инструменты.
                <br />Я верю в философию доверительных отношений между менеджером и клиентом.
                </p>
            </div>
        </div>
    </div>
)