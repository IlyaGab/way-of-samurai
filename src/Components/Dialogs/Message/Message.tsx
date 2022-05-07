import clases from '../Dialogs.module.css';
import React from 'react';
import {ActionsTypes, MessagesType} from '../../../redux/state';
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../../redux/dialogsReducer';


type MessagePropsType = {
    messages: Array<MessagesType>
    newMessageBody:string
    dispatch: (action: ActionsTypes) => void
}

const Message = (props: MessagePropsType) => {

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    const onNewMessageChange = () => {
        if (newMessageElement.current) {
            let newText = newMessageElement.current.value
            let action = updateNewMessageActionCreator(newText)
            props.dispatch(action)
        }
    }

    return (
        <div>
            {props.messages.map((el) => {
                return <div key={el.id} className={clases.message}>
                    {el.message}
                </div>
            })}
            <div>
                <textarea ref={newMessageElement} value={props.newMessageBody} onChange={onNewMessageChange} />
                <button onClick={addMessage}> addMessage</button>
            </div>

        </div>
    )
}


export default Message