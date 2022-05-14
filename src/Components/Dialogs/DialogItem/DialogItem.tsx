import clases from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

type DialogItemProps = {
    name:string
    id:number
}
const DialogItem = (props: DialogItemProps) => {
    let path = '/dialogs/';
    return (
        <div className={clases.dialog + ' ' + clases.active}>
            <div><NavLink to={path + props.id}>{props.name}</NavLink></div>
        </div>
    )
}
export default DialogItem