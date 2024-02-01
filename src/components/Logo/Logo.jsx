import React from 'react'
import classes from './Logo.module.scss'

const logo = () => {
    return <logo className={classes.logo}>
        <svg width="100%" height="100%" viewBox="0 0 100% 100%">
            <text
                lengthAdjust="spacing"
                x="50%" y="50%"
                font-size="5rem"
                font-weight="bold"
                fill="none"
                stroke-width="2.7px"
                stroke="rgb(133, 221, 4)"
                textAnchor='middle'>
                timetable
            </text>
        </svg>
    </logo>
}

export default logo