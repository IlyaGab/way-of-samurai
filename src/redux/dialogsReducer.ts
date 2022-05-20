export type DialogReducerActionTypes =
    ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageActionCreator>

export type MessagesType = {
    id: number
    message: string
}
export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
export type DialogsType = {
    id: number
    name: string
}

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
    newMessageBody: ''
}


export const dialogsReducer = (state: DialogPageType = initialState, action: any): DialogPageType => {
    let stateCopy = {...state, messages: [...state.messages]}
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: 6, message: stateCopy.newMessageBody}
            stateCopy.messages.push(newMessage)
            stateCopy.newMessageBody= ''
            return stateCopy
        case UPDATE_NEW_MESSAGE:
            stateCopy.newMessageBody = action.userMessage
            return stateCopy
        default:
            return state
    }
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