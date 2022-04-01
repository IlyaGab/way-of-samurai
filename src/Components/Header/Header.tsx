import React from "react";
import clases from './Header.module.css'
const Header = () => {
    return (
        <header className={clases.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"
                alt=""/>
        </header>
    )
}

export default Header