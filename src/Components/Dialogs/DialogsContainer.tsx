import Dialogs from './Dialogs';
import {
    addMessageActionCreator,
    DialogPageType,
    updateNewMessageActionCreator
} from '../../redux/dialogsReducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';
import React from 'react';


type MapStateToPropsDialogsType = {
    dialogsPage: DialogPageType
}
type MapDispatchToPropsDialogsType = {
    sendMessage: (newMessageBody:string) => void
    updateNewMessageBody: (body: string) => void
}

export type DialogsPageType = MapStateToPropsDialogsType & MapDispatchToPropsDialogsType

let mapStateToProps = (state: AppStateType): MapStateToPropsDialogsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsDialogsType => {
    return {
        sendMessage: (newMessageBody:string) => {
            dispatch(addMessageActionCreator(newMessageBody))
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageActionCreator(body))
        }
    }
}



export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

