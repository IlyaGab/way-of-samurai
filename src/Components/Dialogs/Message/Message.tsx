import clases from '../Dialogs.module.css';
import React from 'react';

type MessagePropsType = {
    message: string
    id: number
}

const Message = (props: MessagePropsType) => {
    return (
        <div key={props.id} className={clases.message}>
            {props.message}
        </div>
    )
}


export default Message