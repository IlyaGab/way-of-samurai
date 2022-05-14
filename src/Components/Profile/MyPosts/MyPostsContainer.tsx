import React from 'react';
import {DialogPageType, ProfilePageType} from '../../../redux/store';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {EmptyObject, Store} from 'redux';
import StoreContext from '../../../StoreContext';


// type MyPostsType = {
//     store:Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogPageType;}>
// }


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
            store => {
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text: string) => {
                    let action = updateNewPostActionCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                                newPostText={store.getState().profilePage.newPostText} postData={store.getState()}/>
            }
        }
        </StoreContext.Consumer>)
}


export default MyPostsContainer