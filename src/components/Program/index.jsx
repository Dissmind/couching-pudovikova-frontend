import React, { useEffect, useState } from 'react'
import './style.css'
import TitleBackground from "./TitleBackground/TitleBackground";
import Title from "../../UI/Title";
import {Card} from "../../UI/Card";
import liWhiteImage from "../../attachments/img/li-white.png"
import liRedImage from "../../attachments/img/li-red.png"
import { useSelector, useDispatch } from 'react-redux'
import {
    selectCards,
    fetchData,
} from './index.reducer.js'

export const Program = () => {
    const cards = useSelector(selectCards)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <div className="Program">
            <TitleBackground>
                <Title
                    content="Темы обучения"
                    fontSize="45px"
                    color="#FEFEFE"
                    width="420px"
                    marginBottom="16px"
                />
            </TitleBackground>
            <div className="CardBlock">
                {cards.map(i => (
                    <Card
                        cardTitle={i.cardTitle}
                        cardType={i.cardType}
                        list={i.list}
                        timeStudy={i.timeStudy}
                        price={i.price}
                        themeNumber={i.themeNumber}

                        summaryHeight="577px"
                        borderWidth="450px"
                        borderHeight="560px"
                        borderColor="#E7EAEF"
                        backgroundWidth="455px"
                        backgroundHeight="560px"
                        backgroundColor="#952D31"
                        fontColor="#FFFFFF"
                    />))
                    }
            </div>
            <div className="ButtonMore">Узнать больше информации о курсах</div>
        </div>
    )
}