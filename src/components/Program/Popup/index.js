import React from "react";
import './style.css'


const theme = [
    {
        summaryHeight: "577px",
        borderWidth: "450px",
        borderHeight: "560px",
        borderColor: "#E7EAEF",
        backgroundWidth: "455px",
        backgroundHeight: "560px",
        backgroundColor: "#952D31",
        fontColor: "#FFFFFF"
    },
    {
        summaryHeight: "577px",
        cardMarginLeftRight: "60px",
        borderWidth: "450px",
        borderHeight: "560px",
        borderColor: "#952D31",
        backgroundWidth: "455px",
        backgroundHeight: "560px",
        backgroundColor: "#E7EAEF",
        fontColor: "#952D31"
    },
    {
        summaryHeight: "577px",
        borderWidth: "450px",
        borderHeight: "560px",
        borderColor: "#952D31",
        backgroundWidth: "455px",
        backgroundHeight: "560px",
        backgroundColor: "#FFFFFF",
        fontColor: "#952D31"
    }
]

export const PopupProgram = ({close, cardTitle, cardType, list, timeStudy, price, themeNumber}) => (
    <>

        <div className="PopupProgramBackground" onClick={close} />

        <div className="PopupProgram">
            <div className="CardBorder" style={{
                border: `2px ${theme[themeNumber].borderColor} solid`,
            }}>
                <div className="CardTitle" style={{
                    color: theme[themeNumber].fontColor,
                }}>{cardTitle}
                    <div className="CardType" style={{
                        color: theme[themeNumber].fontColor,
                    }}>| {cardType}</div>
                </div>
                <div className="CardContent">
                    <ul>
                        {
                            list.map(i => <li style={{color: theme[themeNumber].fontColor}}>{i}</li>)
                        }
                    </ul>
                </div>
                <div className="CardInformation">
                    <div className="TimeStudy">
                        <p className="Title" style={{color: theme[themeNumber].fontColor}}>Время обучения:</p>
                        <p className="Description"
                           style={{color: theme[themeNumber].fontColor,}}>{timeStudy}</p>
                    </div>
                    <div className="Price">
                        <p className="Title" style={{color: theme[themeNumber].fontColor}}>Стоимость курса:</p>
                        <p className="Description" style={{color: theme[themeNumber].fontColor}}>{price} ₽</p>
                    </div>
                </div>
            </div>
            <div className="CardBackground" style={{
                backgroundColor: theme[themeNumber].backgroundColor,
            }}/>
        </div>

    </>
)