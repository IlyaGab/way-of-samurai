import React from 'react';
import clases from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogPageType, DialogsType, MessagesType} from '../../redux/state';

type DialogsProps = {
    dialogs:Array<DialogsType>
    messages:Array<MessagesType>
}

const Dialogs = (props:DialogsProps) => {
    let dialogs = props.dialogs
    let messages = props.messages
    return (
        <div className={clases.dialogs}>
            <div className={clases.dialogs_items}>
                <DialogItem dialogs={dialogs} />)
            </div>

            <div className={clases.messages}>
                <Message  messages={messages}/>)
            </div>
        </div>
    )
}

export default Dialogs
