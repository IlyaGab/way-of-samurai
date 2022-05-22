import {
    addPostActionCreator,
    ProfilePageType,
    updateNewPostActionCreator
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';


type MapStateMyPoststContainerPropsType = {
    profilePage: ProfilePageType
}

type MapDispatchMyPoststContainerPropsType = {
    updateNewPostText: (text:string)=>void
    addPost: ()=>void
}

export type MyPostsType = MapStateMyPoststContainerPropsType & MapDispatchMyPoststContainerPropsType

let mapStateToProps = (state: AppStateType):MapStateMyPoststContainerPropsType => {
    return {
        profilePage:state.profilePage
    }
}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchMyPoststContainerPropsType => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostActionCreator(text)
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


