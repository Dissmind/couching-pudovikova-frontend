import React from 'react'

import { About } from './index.jsx'


export default {
    title: 'About/About',
    component: About,
}

const Template = (args) => <About {...args} />

export const Primary = Template.bind({})
Primary.args = {}