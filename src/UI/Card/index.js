import React from "react";
import './style.css'

export const Card = (props) => (
    <div className="Card">
        <div className="CardBorder">
            <div className="CardTitle">Продажи</div>
            <div className="CardType">VIP-Формат</div>
            <div className="CardContent">
                <ul style={{listStyleImage: props.liImage}}>
                    {
                        props.list.map(i => <li>{i}</li>)
                    }
                </ul>
            </div>
            <div className="ButtonMore">Подробнее</div>
            <div className="CardInformation">
                <div className="">

                </div>
                <div>

                </div>
            </div>
        </div>
        <div className="CardBackground" />
    </div>
)