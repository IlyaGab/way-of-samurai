import React from 'react';
import {NavLink} from 'react-router-dom';
import clases from './Dialogs.module.css'

type DialogItemProps = {
    name: string
    id: string
}

type MessageProps = {
    message: string
}

const DialogItem = (props: DialogItemProps) => {
    let abc = '/dialogs/' + props.id
    return (
        <div className={clases.dialog + ' ' + clases.active}>
            <NavLink to={abc}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageProps) => {
    return (
        <div className={clases.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={clases.dialogs}>
            <div className={clases.dialogs_items}>

                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Sasha" id="3"/>
                <DialogItem name="Ilya" id="4"/>
                <DialogItem name="Alena" id="5"/>

            </div>

            <div className={clases.messages}>

                <Message message="Hi"/>
                <Message message="How is your IT-KAMASUTRA?"/>
                <Message message="Yo"/>

            </div>
        </div>
    )
}

export default Dialogs
