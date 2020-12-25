import React from 'react'
import './ButtonAppointment.css'
import { animateScroll as scroll, scroller, Link } from 'react-scroll'
import { LinkTo } from '@storybook/addon-links'

function ButtonAppointment(props) {

    const goToProgram = () => {
        scroller.scrollTo('program-anchor', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    return (
        // <Link to={"program-anchor"}>
            <div
                className="ButtonAppointment"
                onClick={goToProgram}
            >
                <div>
                    {props.content}
                </div>
            </div>
        // </Link>
    )
}

export default ButtonAppointment