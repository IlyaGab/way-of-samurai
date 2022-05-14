import React from 'react';
import {StoreTypes} from '../../redux/store';
import Dialogs from './Dialogs';
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../redux/dialogsReducer';

type DialogsContainerPropsType = {
    store:StoreTypes
}

const DialogsContainer = (props:DialogsContainerPropsType) => {

    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onNewMessageChange = (body:string) => {
        props.store.dispatch(updateNewMessageActionCreator(body))
    }

    return (<Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={props.store.getState().dialogsPage} />
    );
};

export default DialogsContainer;