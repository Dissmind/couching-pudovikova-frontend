import React from 'react'

import { Feedback } from './index.jsx'


export default {
    title: 'Feedback/FeedbackComponent',
    component: Feedback,
}

const Template = (args) => <Feedback {...args} />

export const Primary = Template.bind({})
// Primary.args = {
//     title: 'Продажи',
//     type: 'VIP-Формат',
//     list: ['first', 'second', 'third'],
//     time: '12',
//     price: '14999'
// }