import React from "react";
import './style.css'
import TitleBackground from "./TitleBackground/TitleBackground";
import Title from "../../UI/Title";
import {Card} from "../../UI/Card";

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
            <Card />
            <Card />
            <Card />
        </div>
    </div>
)