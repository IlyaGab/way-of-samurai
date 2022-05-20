import {
    addPostActionCreator,
    ProfilePageType,
    ProfileReducerActionsType,
    updateNewPostActionCreator
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';


type MyPoststConteinerPropsType = {
    profilePage: ProfilePageType
}


let mapStateToProps = (state: AppStateType):MyPoststConteinerPropsType => {
    return {
        profilePage:state.profilePage
    }
}

let mapDispatchToProps = (dispatch:Dispatch<ProfileReducerActionsType>) => {
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


