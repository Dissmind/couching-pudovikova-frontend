import React, {useState} from 'react'
import styled from 'styled-components'
import './style.css'
import Title from "../../UI/Title";
import logoMail from "../../attachments/img/logoMail.png"


export const Record = () => {

    const [selectColor, setSelectColor] = useState("#ffffffb4")
    
    return (
        <div className="Record">
            <Title
                content="запись на обучение"
                fontSize="45px"
                color="#952D31"
                marginBottom="15px"
                width="600px"
            />
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
                            <select type="text" style={{color: selectColor}} onChange={() => {setSelectColor('#ffffff')}}>
                                <option className="OptionTitle" disabled selected style={{display: "none"}}>Выбранный курс</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                    </div>
                    <div className="ButtonSend">
                        <img src={logoMail} alt="logoMail" className="logoMail" />
                    </div>
                </div>
                <div className="BackgroundSquare" />
            </div>
        </div>
    )
}