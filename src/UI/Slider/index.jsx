import React, { useState } from 'react'
import styled from 'styled-components'
import './style.css'


const StlSlider = styled.div`
    width: 90%;
    height: 70vh;
    display: flex;
    width: 100%;
    overflow-x: hidden;
    justify-content: center;
`


export const Slider = ({cards}) => {

    const [cardId, setCardId] = useState([0, 1])
    const [status, setStatus] = useState(null)

    const prevHandler = () => {
        if ((cardId[1] - 1) < 0) return

        setStatus('left')
        setTimeout(() => {
            setStatus(null)
            setCardId([(cardId[0] - 1), (cardId[1] - 1)])
        }, 400)
    }
    const nextHandler = () => {
        if ((cardId[1] + 1) > cards.length) return

        setStatus('right')
        setTimeout(() => {
            setStatus(null)
            setCardId([(cardId[0] + 1), (cardId[1] + 1)])
        }, 400)
    }


    const toggleMove = () => {
        const StlCardMoveLeft = {
            transform: 'translateX(-100%)',
            transition: '1s ease',
        }

        const StlCardMoveRight = {
            transform: 'translateX(100%)',
            transition: '1s ease',
        }

        switch(status) {
            case 'left':
                return StlCardMoveLeft
            case 'right':
                return StlCardMoveRight
            default:
                return null
        }
    }


    return (
        <>
            <div style={toggleMove()}>
                <StlSlider>
                    {cards[cardId[0]]}
                    {cards[cardId[1]]}
                </StlSlider>
            </div>

            {/*<button*/}
            {/*    onClick={prevHandler}*/}
            {/*>Prev</button>*/}
            {/*<button*/}
            {/*    onClick={nextHandler}*/}
            {/*>Next</button>*/}

            <div className="prevButton" onClick={prevHandler}>

            </div>
            <div className="nextButton" onClick={nextHandler}>

            </div>
        </>
    )
}