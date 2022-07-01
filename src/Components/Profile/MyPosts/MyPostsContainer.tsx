import {
    addPostActionCreator,
    ProfilePageType,
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';



type MapStateMyPoststContainerPropsType = {
    profilePage: ProfilePageType
}

type MapDispatchMyPoststContainerPropsType = {
    addPost: (newPostText:string)=>void
}

export type MyPostsType = MapStateMyPoststContainerPropsType & MapDispatchMyPoststContainerPropsType

let mapStateToProps = (state: AppStateType):MapStateMyPoststContainerPropsType => {
    return {
        profilePage:state.profilePage
    }
}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchMyPoststContainerPropsType => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


