export type ProfileReducerActionsType =
    ReturnType<typeof addPostActionCreator>
    & ReturnType<typeof updateNewPostActionCreator>

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
let ADD_POST = 'ADD-POST'
let UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-POST-TEXT'


let initialState:ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 11},
        {id: 3, message: 'blabla', likesCount: 11},
        {id: 4, message: 'fafa', likesCount: 11}
    ],
    newPostText: 'it-kamasutra'
}

export const profileReducer = (state = initialState, action: ProfileReducerActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
          return  {...state,
                newPostText : '',
                posts:[...state.posts,{id: 5, message: state.newPostText, likesCount: 0}]}
        case UPDATE_NEW_TEXT_POST:
            return {...state, newPostText: action.newText}
        default:
            return state
    }
}

export const updateNewPostActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_TEXT_POST,
        newText: newText
    } as const
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}

