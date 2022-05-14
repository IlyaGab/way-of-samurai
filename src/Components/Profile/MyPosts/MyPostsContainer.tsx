import React from 'react';
import { StoreTypes} from '../../../redux/store';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';



type MyPostsType = {
    store:StoreTypes
}


const MyPostsContainer = (props: MyPostsType) => {

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text:string) => {
            let action = updateNewPostActionCreator(text)
            props.store.dispatch(action)
        }

    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} newPostText={props.store._state.profilePage.newPostText} postData={props.store._state.profilePage.posts} />)
}


export default MyPostsContainer