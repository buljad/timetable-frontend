import React from 'react'
import classes from './Header.module.scss'
import { BiMenuAltRight } from 'react-icons/bi'
//import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
    return <header className={classes.header}>
        <div className={classes.header__content}>
            <h2 className={classes.header__content__logo}>timetable</h2>
            <nav className={classes.header__content__nav}>
                <div className={classes.header__content__nav__label}>it's just a timetable webpage</div>
            </nav>
            <div className={classes.header__content__toggle}>
                <BiMenuAltRight/>
            </div>
        </div>
    </header>
}

export default Header;
