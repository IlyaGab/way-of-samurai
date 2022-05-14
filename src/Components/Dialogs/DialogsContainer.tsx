import React from 'react';

import Dialogs from './Dialogs';
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../redux/dialogsReducer';
import {EmptyObject, Store} from 'redux';
import {DialogPageType, ProfilePageType} from '../../redux/store';
import StoreContext from '../../StoreContext';

// type DialogsContainerPropsType = {
//     store:Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogPageType; }>
// }

const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                store => {
                    let onSendMessageClick = () => {
                        store.dispatch(addMessageActionCreator())
                    }

                    let onNewMessageChange = (body: string) => {
                        store.dispatch(updateNewMessageActionCreator(body))
                    }

                    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                                    dialogsPage={store.getState().dialogsPage}/>
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;