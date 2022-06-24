import {ProfileStatePropsType} from '../Components/Profile/ProfileContainer';
import {Dispatch} from 'redux';
import {profileAPI} from '../API/api';

export type ProfileReducerActionsType =
    ReturnType<typeof addPostActionCreator>
    & ReturnType<typeof updateNewPostActionCreator>
    & ReturnType<typeof setUserProfile>
    & ReturnType<typeof setStatus>

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileStatePropsType | null
    status: string
}
let ADD_POST = 'ADD-POST'
let UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-POST-TEXT'
let SET_USER_PROFILE = 'SET_USER_PROFILE'
let SET_STATUS = 'SET_STATUS'



let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 11},
        {id: 3, message: 'blabla', likesCount: 11},
        {id: 4, message: 'fafa', likesCount: 11}
    ],
    newPostText: 'it-kamasutra',
    profile: null,
    status: ""
}

export const profileReducer = (state = initialState, action: ProfileReducerActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 0}]
            }
        case UPDATE_NEW_TEXT_POST:
            return {...state, newPostText: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
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

export const setUserProfile = (profile: ProfileStatePropsType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}



export const getStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export const getUserProfile = (userID: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userID).then(data => {
            dispatch(setUserProfile(data.data))
        })
    }
}