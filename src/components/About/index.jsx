import Background from "./Background/Background";
import React from "react";
import './style.css'
import Title from "../../UI/Title";
import aboutImage from '../../attachments/img/aboutImage.png'

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
                <img src={aboutImage} alt="aboutImage" className="AboutImage" />
            </div>
            <div className="Info">
                <p>Меня зовут Елена!</p>
                <p>Не следует, однако, забывать о том, что постоянный количественный рост и сфера нашей активности напрямую зависит от новых предложений. С другой стороны выбранный нами инновационный путь...</p>
            </div>
        </div>
    </div>
)