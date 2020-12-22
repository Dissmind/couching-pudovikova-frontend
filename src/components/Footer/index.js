import React from "react";
import './style.css'
import logo from '../../attachments/img/Logo2.png'

export const Footer = () => (
    <div className="Footer">
        <div className="InfoBlock">
            <div className="Info">
                2360494, Россия, г. Калининград
                <br />ул. Менделеева, 78г
                <br />+7 (911) 576-58-48
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