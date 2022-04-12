import React from 'react';
import clases from './MyPosts.module.css'
import Post from './Post/Post';



export type PostDataType = {
    postData:Array<ArrayPropsType>
}

export type ArrayPropsType = {
    id: number
    message:string
    likesCount: number
}

const MyPosts = (props: PostDataType) => {
    return (
        <div>
            <div className={clases.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div>
                    <button>Remove post</button>
                </div>
            </div>
            <div className={clases.posts}>
                {props.postData.map((p) => {
                    return (
                        <Post message={p.message} likesCount={p.likesCount}/>
                    )
                })}
            </div>
        </div>
    )
}

export default MyPosts