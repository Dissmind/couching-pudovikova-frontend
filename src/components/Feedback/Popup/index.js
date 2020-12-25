import React from "react";
import './style.css'
import logoMail from '../../../attachments/img/logoMailWhite.png'

export const PopupFeedback = ({close}) => (
    <>
        <div className="PopupFeedback" onClick={close}>

        </div>
        <div className="PopupWindow">
            <div className="Info">
                <div className="FileForm">Фото</div>
                <input type="file" className="ButtonAddPhoto"></input>
                <div className="ButtonSend">
                    <img src={logoMail} alt="logoMail"/>
                </div>
                <div className="InputBlock">
                    <input type="text" placeholder="Ваши имя и фамилия" className="InputName"></input>
                    <textarea type="text" placeholder="Ваш отзыв" className="InputFeedback"></textarea>
                </div>
            </div>
        </div>
    </>
)