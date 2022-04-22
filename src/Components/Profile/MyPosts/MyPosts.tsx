import React, {useState} from 'react';
import clases from './MyPosts.module.css'
import Post from './Post/Post';
import {PostType} from '../../../redux/state';


type MyPostsType = {
    postData: Array<PostType>
    addPost:(postMessage:string)=>void
}

const MyPosts = (props: MyPostsType) => {
    let postData = props.postData

    const newPostElement:any = React.createRef()

    const addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ('')
    }

    return (
        <div>
            <div className={clases.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement} ></textarea>
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