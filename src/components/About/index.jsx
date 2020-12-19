import Background from "./Background/Background";
import React from "react";
import './style.css'
import Title from "../../UI/Title";

export const About = () => (
    <div className="About">

        <Background />
        <Title
            content="ОБО МНЕ"
            fontSize="45px"
            color="#111111"
            width="280px"
            marginBottom="15px"
        />
    </div>
)