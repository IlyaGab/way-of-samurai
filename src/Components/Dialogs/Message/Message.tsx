import clases from '../Dialogs.module.css';
import React from 'react';
import {MessagesType} from '../../../redux/state';

type MessagePropsType = {
    messages: Array<MessagesType>
}

const Message = (props: MessagePropsType) => {

    const newMessageElement:any = React.createRef()

    const addMessage = ()=> {
        let text = newMessageElement.current.value
        alert(text)
    }

    return (
        <div>
            {props.messages.map((el) => {
                return <div className={clases.message}>
                    {el.message}

                </div>
            })}
            <div>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessage}> addMessage</button>
            </div>

        </div>
    )
}


export default Message