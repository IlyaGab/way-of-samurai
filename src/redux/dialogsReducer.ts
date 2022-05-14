import {DialogPageType} from './store';

let ADD_MESSAGE = 'ADD-MESSAGE'
let UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Ilya'},
        {id: 5, name: 'Alena'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your IT-KAMASUTRA?'},
        {id: 3, message: 'Yo'}
    ],
    newMessageBody: ' '
}


export const dialogsReducer = (state: DialogPageType = initialState, action: any) => {

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

export const updateNewMessageActionCreator = (userMessage: string) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        userMessage: userMessage
    } as const
}