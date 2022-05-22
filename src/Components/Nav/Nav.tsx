import React from "react";
import { NavLink } from "react-router-dom";
import clases from './Nav.module.css'


const Navigation = () => {
    return (
        <nav className={clases.nav}>
            <div className={`${clases.item} ${clases.active}`}>
                <NavLink to='/profile' activeClassName={clases.active}>Profile</NavLink>
            </div>
            <div className={clases.item}>
                <NavLink to='/dialogs' activeClassName={clases.active}>Messages</NavLink>
            </div>
            <div className={clases.item}>
                <NavLink to='/users' activeClassName={clases.active}>Users</NavLink>
            </div>
            <div className={clases.item}>
                <NavLink to='/news' activeClassName={clases.active}>News</NavLink>
            </div>
            <div className={clases.item}>
                <NavLink to='/music' activeClassName={clases.active}>Music</NavLink>
            </div>
            <div className={clases.item}>
                <NavLink to='/settings' activeClassName={clases.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navigation