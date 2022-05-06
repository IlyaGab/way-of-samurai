let ADD_POST = 'ADD-POST'
let UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-POST-TEXT'
let ADD_MESSAGE = 'ADD-MESSAGE'
let UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE'

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

    dispatch(action: any) {
        if (action.type === ADD_POST) {
            let newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0};
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_TEXT_POST) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {id: 6, message: this._state.dialogsPage.newMessageBody}
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageBody = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE){
            this._state.dialogsPage.newMessageBody = action.userMessage
            this._callSubscriber()
        }
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

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_TEXT_POST, newText: text
    } as const
}
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    } as const
}

export const updateNewMessageActionCreator = (userMessage:string) => {
    return {
        type: UPDATE_NEW_MESSAGE, userMessage: userMessage
    } as const
}

export default store

