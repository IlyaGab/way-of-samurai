import React from 'react';
import clases from './MyPosts.module.css'
import Post from './Post/Post';
import {MyPostsType} from './MyPostsContainer';
import {AddNewPostFormTypes, ReduxAddPostForm} from './ProfileInfo/AddNewPostForm';


const MyPosts = (props: MyPostsType) => {
    let postData =
        props.profilePage.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)


    const addPost = (values:AddNewPostFormTypes) => {
        props.addPost(values.newPostText)
    }



    return (
        <div>
            <div className={clases.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <ReduxAddPostForm onSubmit={addPost}/>
            </div>
            <div className={clases.posts}>
                {postData}
            </div>
        </div>
    )
}


export default MyPosts