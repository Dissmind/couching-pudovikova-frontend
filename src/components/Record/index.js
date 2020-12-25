import React, {useState} from 'react'
import './style.css'
import Title from "../../UI/Title";
import logoMail from "../../attachments/img/logoMail.png"
import {Element} from 'react-scroll'
import axios from 'axios'

export const Record = (props) => {
    const [selectColor, setSelectColor] = useState("#ffffffb4")

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [number, setNumber] = useState('')
    const [program, setProgram] = useState('')

    const f = () => {
        const url = 'http://127.0.0.1:8000/api/send-program'

        console.log(url)
        axios.get(url, {
            params: { name, email, number, program }
        })
            .then((response) => console.log(response.data))
    }

    return (
        <div className="Record">
            <Element name={'record-anchor'}/>

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
                            <input type="text" placeholder="ВАШЕ ИМЯ" onChange={e => setName(e.target.value)} />
                            <input type="text" placeholder="ТЕЛЕФОН" onChange={e => setEmail(e.target.value)} />
                            <input type="text" placeholder="EMAIL" onChange={e => setNumber(e.target.value)} />
                            <select type="text" style={{color: selectColor}} onChange={e => {
                                const selectedIndex = e.target.options.selectedIndex
                                setProgram(e.target.options[selectedIndex].value)
                                setSelectColor('#ffffff')}
                            }>
                                <option className="OptionTitle" disabled selected style={{display: "none"}}>Выбранный курс</option>
                                <option>ПРОДАЖИ - VIP-ФОРМАТ</option>
                                <option>ПРОДАЖИ - БАЗОВЫЙ ФОРМАТ</option>
                                <option>ПРОДАЖИ - ЭКОНОМ-ФОРМАТ</option>
                            </select>
                        </div>
                    </div>
                    <div
                        onClick={f}
                        className="ButtonSend"
                    >
                        <img src={logoMail} alt="logoMail" className="logoMail" />
                    </div>
                </div>
                <div className="BackgroundSquare" />
            </div>
        </div>
    )
}