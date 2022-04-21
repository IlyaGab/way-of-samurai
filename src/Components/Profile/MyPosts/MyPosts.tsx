import React from 'react';
import clases from './MyPosts.module.css'
import Post from './Post/Post';
import {PostType, ProfilePageType} from '../../../redux/state';


type MyPostsType = {
    postData: Array<PostType>
}

const MyPosts = (props: MyPostsType) => {
    let postData = props.postData
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
                        <Post postData={postData} />
            </div>
        </div>
    )
}

export default MyPosts