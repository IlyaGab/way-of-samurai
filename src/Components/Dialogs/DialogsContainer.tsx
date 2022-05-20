import Dialogs from './Dialogs';
import {
    addMessageActionCreator,
    DialogPageType,
    DialogReducerActionTypes,
    updateNewMessageActionCreator
} from '../../redux/dialogsReducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


export type DialogsContainerPropsType = {
    dialogsPage: DialogPageType
}


let mapStateToProps = (state:AppStateType):DialogsContainerPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch:Dispatch<DialogReducerActionTypes>) => {
    return {
        sendMessage:()=>{dispatch(addMessageActionCreator())},
        updateNewMessageBody: (body:string)=>{dispatch(updateNewMessageActionCreator(body))}
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

