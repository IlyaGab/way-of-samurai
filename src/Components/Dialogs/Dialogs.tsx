import React from 'react';
import clases from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {PostDataType} from '../../index';

type DialogItemProps = {
    name: string
    id: string
}

export type MessageProps = {
    message: string
}

const Dialogs = (props:PostDataType) => {

    let dialogsElements = props.dialogs.map((d)=> <DialogItem name={d.name} id={d.id}/>)
    let dialogsMessages = props.messages.map((m)=> <Message message={m.message}/>)

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
