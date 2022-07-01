import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import clases from './Dialogs.module.css';
import {DialogsPageType} from './DialogsContainer';
import {AddMessageFormTypes, ReduxAddMessageForm} from './AddMessageForm';




const Dialogs = (props: DialogsPageType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElements = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    const addNewMessage = (values: AddMessageFormTypes) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={clases.dialogs}>
            <div className={clases.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={clases.messages}>
                <div>{messageElements}</div>
                <div>
                    <ReduxAddMessageForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>

    )
}





export default Dialogs
