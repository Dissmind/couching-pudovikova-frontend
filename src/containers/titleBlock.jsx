import React from 'react'
import styled from 'styled-components'


const StlBlocks = styled.div`
    height: 100vh;
`

const StlTitle = (color, background) => styled.div`
    color: ${{color}};
    background: ${{background}};
`


export const TitleBlockHOC = ({text, color, background}) => (
    <div>
        test
    </div>
)