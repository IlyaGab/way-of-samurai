import clases from '../Dialogs.module.css';
import React from 'react';
import {MessageProps} from '../Dialogs';

const Message = (props: MessageProps) => {
    return (
        <div className={clases.message}>{props.message}</div>
    )
}

export default Message