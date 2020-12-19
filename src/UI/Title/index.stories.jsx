import React from 'react'

import Title from "./index.js";


export default {
    title: 'Title/Title',
    component: Title,
}

const Template = (args) => <Title {...args} />

export const Primary = Template.bind({})
Primary.args = {
    content: 'Title',
    fontSize: "45px",
    color: "#952D31",
    width: "920px",
    marginBottom: "10px"
}