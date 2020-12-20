import Background from "./Background/Background";
import React from "react";
import './style.css'
import Title from "../../UI/Title";

export const About = () => (
    <div className="About">
        <Background>

        </Background>
        <Title
            content="Обо мне"
            fontSize="45px"
            // color="#FEFEFE"
            color="#111111"
            width="280px"
            marginBottom="15px"
        />
    </div>
)