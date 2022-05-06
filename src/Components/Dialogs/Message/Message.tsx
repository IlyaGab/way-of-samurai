import clases from '../Dialogs.module.css';
import React from 'react';
import {ActionsTypes, MessagesType} from '../../../redux/state';

type MessagePropsType = {
    messages: Array<MessagesType>
    dispatch: (action:ActionsTypes) => void
}

const Message = (props: MessagePropsType) => {

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value
            props.dispatch({type: 'ADD-MESSAGE', userMessage:text})
            newMessageElement.current.value = (' ')
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
                <textarea ref={newMessageElement}>x</textarea>
                <button onClick={addMessage}> addMessage</button>
            </div>

        </div>
    )
}


export default Message