import React from 'react'

import { Card } from './index.js'


export default {
    title: 'Card/Card',
    component: Card,
}

const Template = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {
    cardTitle: "Продажи",
    cardType: "VIP-формат",
    list: ["Психология продаж", "Владение переговорами", "Создание вечных отношений\n" +
            "с клиентом", "Ценности и боли клиентов"],
timeStudy: "12 месяцев",
    price: "14 999",
    themeNumber: 0
}