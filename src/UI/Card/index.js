import React from "react";
import './style.css'

export const Card = (props) => (
    <div className="Card" style={{height: props.summaryHeight}}>
        <div className="CardBorder" style={{
            width: props.borderWidth,
            height: props.borderHeight,
            border: `2px ${props.borderColor} solid`,
        }}>
            <div className="CardTitle" style={{
                color: props.fontColor,
            }}>{props.cardTitle}</div>
            <div className="CardType" style={{
                color: props.fontColor,
            }}>{props.cardType}</div>
            <div className="CardContent">
                <ul>
                    {
                        props.list.map(i => <li style={{color: props.fontColor}}>{i}</li>)
                    }
                </ul>
            </div>
            <div className="ButtonMore" style={{
                border: `${props.fontColor} 2px solid`,
                color: props.fontColor
            }}>Подробнее</div>
            <div className="CardInformation">
                <div className="TimeStudy">
                    <p className="Title" style={{color: props.fontColor}}>Время обучения:</p>
                    <p className="Description" style={{color: props.fontColor,}}>{props.timeStudy}</p>
                </div>
                <div className="Price">
                    <p className="Title" style={{color: props.fontColor}}>Стоимость курса:</p>
                    <p className="Description" style={{color: props.fontColor}}>{props.price} ₽</p>
                </div>
            </div>
        </div>
        <div className="CardBackground" style={{
            width: props.backgroundWidth,
            height: props.backgroundHeight,
            backgroundColor: props.backgroundColor,
        }}/>
    </div>
)