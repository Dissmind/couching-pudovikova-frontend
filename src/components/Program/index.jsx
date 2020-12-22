import React from "react";
import './style.css'
import TitleBackground from "./TitleBackground/TitleBackground";
import Title from "../../UI/Title";
import {Card} from "../../UI/Card";
import liWhiteImage from "../../attachments/img/li-white.png"
import liRedImage from "../../attachments/img/li-red.png"


export const Program = () => (
    <div className="Program">
        <TitleBackground>
            <Title
                content="Темы обучения"
                fontSize="45px"
                color="#FEFEFE"
                width="420px"
                marginBottom="16px"
            />
        </TitleBackground>
        <div className="CardBlock">
            <Card
                cardTitle="Продажи"
                cardType="VIP-формат"
                list = {["Психология продаж", "Владение переговорами", "Создание вечных отношений\n" +
            "с клиентом", "Ценности и боли клиентов"]}
                timeStudy="12 месяцев"
                price="14 999"

                summaryHeight="577px"

                borderWidth="450px"
                borderHeight="560px"
                borderColor="#E7EAEF"

                backgroundWidth="455px"
                backgroundHeight="560px"
                backgroundColor="#952D31"

                fontColor="#FFFFFF"
            />
            <Card
                cardTitle="Продажи"
                cardType="Базовый формат"
                list = {["Психология продаж", "Владение переговорами", "Создание вечных отношений\n" +
                "с клиентом", "Ценности и боли клиентов"]}
                timeStudy="12 месяцев"
                price="9 999"

                summaryHeight="577px"
                cardMarginLeftRight="60px"

                borderWidth="450px"
                borderHeight="560px"
                borderColor="#952D31"

                backgroundWidth="455px"
                backgroundHeight="560px"
                backgroundColor="#E7EAEF"

                fontColor="#952D31"
            />
            <Card
                cardTitle="Продажи"
                cardType="Эконом-формат"
                list = {["Психология продаж", "Владение переговорами", "Создание вечных отношений\n" +
                "с клиентом", "Ценности и боли клиентов"]}
                timeStudy="12 месяцев"
                price="4 999"

                summaryHeight="577px"

                borderWidth="450px"
                borderHeight="560px"
                borderColor="#952D31"

                backgroundWidth="455px"
                backgroundHeight="560px"
                backgroundColor="#FFFFFF"

                fontColor="#952D31"
            />
        </div>
        <div className="ButtonMore">Узнать больше информации о курсах</div>
    </div>
)