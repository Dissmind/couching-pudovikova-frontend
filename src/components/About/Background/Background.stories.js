import React from 'react'

import Background from './Background.js'


export default {
    title: 'Background/Background',
    component: Background,
}

const Template = (args) => <Background {...args} />

export const Primary = Template.bind({})
Primary.args = {}