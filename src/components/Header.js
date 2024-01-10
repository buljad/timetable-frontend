import React from 'react'
import classes from './Header.module.scss'
//import { BiMenuAltRight } from 'react-icons/bi'
//import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
    return <header className={classes.header}>
        <div className={classes.header__content}>
            <h2 className={classes.header__content__logo}>timetable</h2>
            <div>it's just a timetable webpage</div>
            <nav className={classes.header__content__nav}>
                
            </nav>
        </div>
    </header>
}

export default Header