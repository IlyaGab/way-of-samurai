import React, {ChangeEvent, RefObject, useState} from 'react';
import clases from './MyPosts.module.css'
import Post from './Post/Post';
import {PostType} from '../../../redux/state';


type MyPostsType = {
    postData: Array<PostType>
    newPostText:string
    addPost:()=>void
    updateNewPostText:(newText:string)=>void
}


export const MyPosts = (props: MyPostsType) => {
    let postData = props.postData

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
            props.addPost()
    }

    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div>
            <div className={clases.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div>
                    <button>Remove post</button>
                </div>
            </div>
            <div className={clases.posts}>
                        <Post postData={postData} />
            </div>
        </div>
    )
}


export default MyPosts