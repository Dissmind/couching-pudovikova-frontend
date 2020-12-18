import React from 'react'

import { FeedbackCard } from './index.jsx'


export default {
    title: 'Feedback/FeedbackCard',
    component: FeedbackCard,
}

const Template = (args) => <FeedbackCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    title: 'Продажи',
    type: 'VIP-Формат',
    list: ['first', 'second', 'third'],
    time: '12',
    price: '14999'
}