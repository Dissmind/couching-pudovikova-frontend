import React from 'react'
import './style.css'
import Title from "../../UI/Title";

export const Record = () => (
    <div className="Record">
        <Title
            content="запись на обучение"
            fontSize="45px"
            color="#952D31"
            marginBottom="15px"
            width="600px"
        >
        </Title>
        <div className="FormRecord">
            <div className="Background">
                <div className="InfoBlock">
                    <div className="Description">
                        Оставьте свои данные и мы перезвоним вам для уточнения полной информации.
                    </div>
                    <div className="Info">
                        <input type="text" placeholder="ВАШЕ ИМЯ"></input>
                        <input type="text" placeholder="ТЕЛЕФОН"></input>
                        <input type="text" placeholder="EMAIL"></input>
                        <input type="text" placeholder="ВЫБРАННЫЙ КУРС"></input>
                    </div>
                </div>
                <div className="ButtonSend">

                </div>
            </div>
            <div className="BackgroundSquare"></div>
        </div>
    </div>
)