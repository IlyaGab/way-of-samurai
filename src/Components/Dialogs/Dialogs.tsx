import React, {ChangeEvent} from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import clases from './Dialogs.module.css';
import {DialogsPageType} from './DialogsContainer';
import {Redirect} from 'react-router-dom';


const Dialogs = (props: DialogsPageType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElements = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

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
