import React from 'react';
import clases from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id:1, message:'Hi, how are you?', likesCount:12},
        {id:2, message:'Its my first post', likesCount:11}

    ]
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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>

            </div>
        </div>
    )
}

export default MyPosts