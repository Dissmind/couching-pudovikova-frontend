import React from 'react'

import{ Intro } from "./index.jsx";


export default {
    title: 'Intro/Logo',
    component: Intro,
}

const Template = (args) => <Intro {...args} />

export const Primary = Template.bind({})
Primary.args = {}