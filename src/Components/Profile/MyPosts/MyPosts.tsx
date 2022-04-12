import React from 'react';
import clases from './MyPosts.module.css'
import Post from './Post/Post';
import post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id:1, message:'Hi, how are you?', likesCount:12},
        {id:2, message:'Its my first post', likesCount:11},
        {id:3, message:'blabla', likesCount:11},
        {id:4, message:'fafa', likesCount:11}

    ]

    let postsElements = postData.map((p)=><Post message={p.message} likesCount={p.likesCount}/>)
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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts