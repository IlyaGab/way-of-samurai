import React from "react";
import clases from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div >
            <div >
                My posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className='posts'>
                <Post message = "Hi, how are you?" />
                <Post message = "Its my first post"/>

            </div>
        </div>
    )
}

export default MyPosts