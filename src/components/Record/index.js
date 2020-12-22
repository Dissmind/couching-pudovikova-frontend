import React from 'react'
import './style.css'

export const Record = () => (
    <div className="Record">

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

    </div>
)