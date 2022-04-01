import React from "react";
import clases from './Nav.module.css'

const Navigation = () => {
    return (
        <nav className={clases.nav}>
            <div className={`${clases.item} ${clases.active}`}><a>Profile</a>
            </div>
            <div className={clases.item}><a>Messages</a>
            </div>
            <div className={clases.item}><a>News</a>
            </div>
            <div className={clases.item}><a>Music</a>
            </div>
            <div className={clases.item}><a>Settings</a>
            </div>
        </nav>
    )
}

export default Navigation