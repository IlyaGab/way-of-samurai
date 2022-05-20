import React, {ChangeEvent} from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import clases from './Dialogs.module.css';
import {DialogPageType} from '../../redux/dialogsReducer';

type DialogsPropsType = {
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
    dialogsPage:DialogPageType
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={clases.dialogs}>
            <div className={clases.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={clases.messages}>
                <div>{messageElements}</div>
                <textarea value={newMessageBody} onChange={onNewMessageChange}/>
                <div>
                    <button onClick={onSendMessageClick}> addMessage</button>
                </div>
            </div>
        </div>

    )
}

export default Dialogs
