import React, { useEffect, useState } from 'react'
import './style.css'

import TitleBackground from "./TitleBackground/TitleBackground";
import Title from "../../UI/Title";
import {Card} from "./Card";
import { useSelector, useDispatch } from 'react-redux'
import {
    selectCards,
    fetchData,
} from './index.reducer.js'
import { Element, scroller } from 'react-scroll'

export const Program = () => {
    const cards = useSelector(selectCards)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const goToRecord = () => {
        scroller.scrollTo('record-anchor', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    return (
        <div className="Program program-anchor">
            <Element name="program-anchor"/>
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
                {
                    cards.map(i => (
                    <Card
                        cardTitle={i.cardTitle}
                        cardType={i.cardType}
                        list={i.list}
                        timeStudy={i.timeStudy}
                        price={i.price}
                        themeNumber={i.themeNumber}
                    />))
                }
            </div>
            <div
                onClick={goToRecord}
                className="ButtonMore"
            >Узнать больше информации о курсах</div>
        </div>
    )
}