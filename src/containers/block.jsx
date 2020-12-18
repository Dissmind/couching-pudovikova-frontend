import React from 'react'
import styled from 'styled-components'


const StlBlocks = styled.div`
    height: 100vh;
`


export const BlockHOC = ({children}) => (
    <div>
        <hr/>

        <StlBlocks>
            {children}
        </StlBlocks>

        <hr/>
    </div>
)