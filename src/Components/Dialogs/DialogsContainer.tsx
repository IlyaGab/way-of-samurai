import Dialogs from './Dialogs';
import {
    addMessageActionCreator,
    DialogPageType,
    updateNewMessageActionCreator
} from '../../redux/dialogsReducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


type MapStateToPropsDialogsType = {
    dialogsPage: DialogPageType
    isAuth:boolean
}
type MapDispatchToPropsDialogsType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

export type DialogsPageType = MapStateToPropsDialogsType & MapDispatchToPropsDialogsType

let mapStateToProps = (state: AppStateType): MapStateToPropsDialogsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth:state.authReducer.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsDialogsType => {
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageActionCreator(body))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

