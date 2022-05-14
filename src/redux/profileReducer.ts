import { ProfilePageType} from './store';

let ADD_POST = 'ADD-POST'
let UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-POST-TEXT'


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 11},
        {id: 3, message: 'blabla', likesCount: 11},
        {id: 4, message: 'fafa', likesCount: 11}
    ],
    newPostText: 'it-kamasutra'
}

const profileReducer = (state:ProfilePageType = initialState, action:any):ProfilePageType => {

    if (action.type === ADD_POST) {
        let newPost = {id: 5, message: state.newPostText, likesCount: 0};
        state.posts.push(newPost)
        state.newPostText = '';
    } else if (action.type === UPDATE_NEW_TEXT_POST) {
        state.newPostText = action.newText
    }
    return state
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





export default profileReducer