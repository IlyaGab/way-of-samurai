import clases from '../Dialogs.module.css';
import React from 'react';
import {MessagesType} from '../../../redux/state';

type MessagePropsType = {
    messages: Array<MessagesType>
}

const Message = (props: MessagePropsType) => {
    return (
        <div>
            {props.messages.map((el) => {
                return <div className={clases.message}>{el.message}</div>
            })}
        </div>
    )
}


export default Message