import React from 'react'

import { Card } from './index.js'


export default {
    title: 'Card/Card',
    component: Card,
}

const Template = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {}