import React from "react";
import './style.css'
import TitleBackground from "./TitleBackground/TitleBackground";
import Title from "../../UI/Title";
import {Card} from "../../UI/Card";
import liWhiteImage from "../../attachments/img/li-white.png"
import liRedImage from "../../attachments/img/li-red.png"


export const Record = () => (
    <div className="Record">
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
            <Card {list: ["qwe", "123", "qwe"]} />
            <Card />
            <Card />
        </div>
    </div>
)