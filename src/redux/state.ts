

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
    posts:Array<PostType>
}
export type DialogPageType = {
    dialogs:Array<DialogsType>
    messages: Array<MessagesType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'Its my first post', likesCount: 11},
            {id: 3, message: 'blabla', likesCount: 11},
            {id: 4, message: 'fafa', likesCount: 11}
        ]
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
};

export default state