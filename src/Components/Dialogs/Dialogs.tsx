import React from 'react';
import {NavLink} from 'react-router-dom';
import clases from './Dialogs.module.css'

type DialogItemProps = {
    name: string
    id: string
}



type MessageProps = {
    message: string
}

const DialogItem = (props: any) => {
    let abc = '/dialogs/' + props.id
    return (
        <div className={clases.dialog + ' ' + clases.active}>
            <NavLink to={abc}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageProps) => {
    return (
        <div className={clases.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id:1, name:'Dimych'},
        {id:2, name:'Andrey'},
        {id:3, name:'Sasha'},
        {id:4, name:'Ilya'},
        {id:5, name:'Alena'}
    ]
    let messagesData = [
        {id:1, message:'Hi'},
        {id:2, message:'How is your IT-KAMASUTRA?'},
        {id:3, message:'Yo'}

    ]

    return (
        <div className={clases.dialogs}>
            <div className={clases.dialogs_items}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                {/*<DialogItem name="Sasha" id="3"/>*/}
                {/*<DialogItem name="Ilya" id="4"/>*/}
                {/*<DialogItem name="Alena" id="5"/>*/}

            </div>

            <div className={clases.messages}>

                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                {/*<Message message="Yo"/>*/}

            </div>
        </div>
    )
}

export default Dialogs
