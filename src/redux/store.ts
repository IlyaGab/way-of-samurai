import profileReducer, {addPostActionCreator, updateNewPostActionCreator} from './profileReducer';
import {addMessageActionCreator, dialogsReducer, updateNewMessageActionCreator} from './dialogsReducer';

let store: StoreTypes = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'Its my first post', likesCount: 11},
                {id: 3, message: 'blabla', likesCount: 11},
                {id: 4, message: 'fafa', likesCount: 11}
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
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
            newMessageBody:' '
        },

    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionsTypes) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber()

    }
}

type StoreTypes = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewPostActionCreator>
    | ReturnType<typeof updateNewMessageActionCreator>

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody:string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}




export default store

