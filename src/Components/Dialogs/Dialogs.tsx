import React from 'react';
import { NavLink } from 'react-router-dom';
import clases from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={clases.dialogs}>
            <div className={clases.dialogs_items}>
                <div className={clases.dialog + ' ' + clases.active}>
                    <NavLink to='/dialogs/1'>Dimych </NavLink></div>
                <div className={clases.dialog}>
                    <NavLink to='/dialogs/2'>Andrey</NavLink></div>
                <div className={clases.dialog}>
                    <NavLink to='/dialogs/3'>Sasha</NavLink></div>
                <div className={clases.dialog}>
                    <NavLink to='/dialogs/4'>Ilya</NavLink></div>
                <div className={clases.dialog}>
                    <NavLink to='/dialogs/5'> Alena</NavLink></div>
            </div>
            <div className={clases.messages}>
                <div className={clases.message}>Hi</div>
                <div className={clases.message}>How is your IT-KAMASUTRA?</div>
                <div className={clases.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs
