import {ProfilePageType} from './state';

let ADD_POST = 'ADD-POST'
let UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-POST-TEXT'


export const profileReducer = (state:ProfilePageType, action:any) => {

    if (action.type === ADD_POST) {
        let newPost = {id: 5, message: state.newPostText, likesCount: 0};
        state.posts.push(newPost)
        state.newPostText = '';
    } else if (action.type === UPDATE_NEW_TEXT_POST) {
        state.newPostText = action.newText

    }
    return state
}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_TEXT_POST,
        newText: newText
    } as const
}