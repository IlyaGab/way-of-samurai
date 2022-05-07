import {DialogPageType,} from './state';

let ADD_MESSAGE = 'ADD-MESSAGE'
let UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

export const dialogsReducer = (state:DialogPageType, action:any) => {

    if (action.type === ADD_MESSAGE) {
        let newMessage = {id: 6, message: state.newMessageBody}
        state.messages.push(newMessage)
        state.newMessageBody = ''
    } else if (action.type === UPDATE_NEW_MESSAGE) {
        state.newMessageBody = action.userMessage
    }
    return state
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    } as const
}

export const updateNewMessageActionCreator = (userMessage:string) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        userMessage: userMessage
    } as const
}