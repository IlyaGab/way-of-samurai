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

const DialogItem = (props: any) => {
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

    let dialogs = [
        {id:1, name:'Dimych'},
        {id:2, name:'Andrey'},
        {id:3, name:'Sasha'},
        {id:4, name:'Ilya'},
        {id:5, name:'Alena'}
    ]
    let messages = [
        {id:1, message:'Hi'},
        {id:2, message:'How is your IT-KAMASUTRA?'},
        {id:3, message:'Yo'}

    ]

    let dialogsElements = dialogs.map((d)=> <DialogItem name={d.name} id={d.id}/>)
    let dialogsMessages = messages.map((m)=> <Message message={m.message}/>)
    return (
        <div className={clases.dialogs}>
            <div className={clases.dialogs_items}>
                {dialogsElements}
            </div>

            <div className={clases.messages}>
                {dialogsMessages}
            </div>
        </div>
    )
}

export default Dialogs
