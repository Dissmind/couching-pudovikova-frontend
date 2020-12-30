import React from "react";
import './style.css'
import logo from '../../attachments/img/Logo2.png'

export const Footer = () => (
    <div className="Footer">
        <div className="InfoBlock">
            <div className="Info">
                + 7 (923) 635-33-34
                <br/>
                г. Калининград
            </div>
            <div className="Copyright">
                © 2020 "Пудовикова Елена Валерьевна"
            </div>
        </div>
        <div className="Logo">
            <img src={logo} alt="logo" className="logo" />
        </div>
    </div>
)