import Dialogs from './Dialogs';
import {
    addMessageActionCreator,
    DialogPageType,
    updateNewMessageActionCreator
} from '../../redux/dialogsReducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';


type MapStateToPropsDialogsType = {
    dialogsPage: DialogPageType
}
type MapDispatchToPropsDialogsType = {
    sendMessage: () => void
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
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageActionCreator(body))
        }
    }
}


export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

