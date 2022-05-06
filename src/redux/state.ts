let store = {
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
        },
    },
    _callSubscriber(state: RootStateType) {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer: ObserverType) {
        this._callSubscriber = observer
    },

    addMessage(userMessage: string) {
        let newMessage = {id: 6, message: userMessage}
        this._state.dialogsPage.messages.push(newMessage)
        this._callSubscriber(this._state)
    },

    dispatch(action: any ){
        debugger
        if(action.type === "ADD-POST"){
            let newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0};
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-MESSAGE'){
            let newMessage = {id: 6, message: action.userMessage}
            this._state.dialogsPage.messages.push(newMessage)
            this._callSubscriber(this._state)
        }
    }
}


type ObserverType = (state: RootStateType) => void

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
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}


export default store

