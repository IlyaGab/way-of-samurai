import clases from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';
import {DialogsType} from '../../../redux/state';


type DialogItemProps = {
    dialogs: Array<DialogsType>
}
const DialogItem = (props: DialogItemProps) => {
    let path = '/dialogs/';
    return (
        <div className={clases.dialog + ' ' + clases.active}>
            {props.dialogs.map((d) => {
                return <div><NavLink to={path + d.id}>{d.name}</NavLink></div>
            })
            }
        </div>
    )
}
export default DialogItem