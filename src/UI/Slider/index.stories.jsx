import React from 'react'

import { Slider } from './index.jsx'
import { Card } from '../../UI/Card/index'


export default {
    title: 'UI/Slider',
    component: Slider,
}

const Template = (args) => <Slider {...args} />


export const Primary = Template.bind({})
Primary.args = {
    cards: [
        <Card
            cardTitle="Продажи"
            cardType="VIP-формат"
            list = {["Психология продаж", "Владение переговорами", "Создание вечных отношений\n" +
            "с клиентом", "Ценности и боли клиентов"]}
            timeStudy="12 месяцев"
            price="14 999"

            summaryHeight="577px"

            borderWidth="450px"
            borderHeight="560px"
            borderColor="#E7EAEF"

            backgroundWidth="455px"
            backgroundHeight="560px"
            backgroundColor="#952D31"

            fontColor="#FFFFFF"
        />,
        <Card
            cardTitle="Продажи"
            cardType="Базовый формат"
            list = {["Психология продаж", "Владение переговорами", "Создание вечных отношений\n" +
            "с клиентом", "Ценности и боли клиентов"]}
            timeStudy="12 месяцев"
            price="9 999"

            summaryHeight="577px"
            cardMarginLeftRight="60px"

            borderWidth="450px"
            borderHeight="560px"
            borderColor="#952D31"

            backgroundWidth="455px"
            backgroundHeight="560px"
            backgroundColor="#E7EAEF"

            fontColor="#952D31"
        />,
        <Card
            cardTitle="Продажи"
            cardType="Эконом-формат"
            list = {["Психология продаж", "Владение переговорами", "Создание вечных отношений\n" +
            "с клиентом", "Ценности и боли клиентов"]}
            timeStudy="12 месяцев"
            price="4 999"

            summaryHeight="577px"

            borderWidth="450px"
            borderHeight="560px"
            borderColor="#952D31"

            backgroundWidth="455px"
            backgroundHeight="560px"
            backgroundColor="#FFFFFF"

            fontColor="#952D31"
        />
    ]
}


// export const Second = Template.bind({})
// Primary.args = {
//
// }