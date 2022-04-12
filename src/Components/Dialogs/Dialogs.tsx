import React from 'react';
import clases from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

type DialogItemProps = {
    name: string
    id: string
}

export type MessageProps = {
    message: string
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
