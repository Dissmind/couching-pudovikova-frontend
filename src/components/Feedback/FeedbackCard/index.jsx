import React from 'react'
import styled from "styled-components";


const StlBorder = styled.div`
    border: solid 4px #952D31; 
    width: 455px;
    height: 560px;
`

const StlCard = styled.div`
    background: #952D31;
    padding: 15px;
    width: 455px;
    height: 560px;
    font-weight: bold;
    transform: translate(20px, 20px)
`

const StlTitle = styled.div`
    color: #FDFBFB;
    font-size: 45px;
`

const StlList = styled.ul``

const StlItem = styled.li`
    color: #FDFBFB;
`

const StlMeta = styled.div`
    color: #FDFBFB;
`

export const FeedbackCard = (
    {title, type, list, time, price}) => (
    <StlBorder>
        <StlCard>
            <StlTitle>{title}</StlTitle>
            <StlTitle>{type}</StlTitle>

            {/*TODO: relocate to component*/}
            <StlList>
                {
                    list.map(i => <StlItem>{i}</StlItem>)
                }
            </StlList>

            <StlMeta>
                <div>Время обучения: {time} месяцев</div>
                <div>Стоимость курса: {price}</div>
            </StlMeta>
        </StlCard>
    </StlBorder>
)