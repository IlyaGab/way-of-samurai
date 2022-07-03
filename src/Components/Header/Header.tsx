import React from "react";
import { NavLink } from "react-router-dom";
import clases from './Header.module.css'

type HeaderTypes = {
    isAuth:boolean,
    login: string | null
    logout: ()=>void
}

const Header = (props:HeaderTypes) => {

    return (
        <header className={clases.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"
                alt=""/>

            <div className={clases.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header