import React from 'react';
import clases from './MyPosts.module.css'
import Post from './Post/Post';
import {PostType} from '../../../redux/store';


type MyPostsType = {
    updateNewPostText: (newPostText: string) => void
    addPost: () => void
    postData: Array<PostType>
    newPostText: string

}


const MyPosts = (props: MyPostsType) => {
    let postData =
        props.postData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
        }

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
                {postData}
            </div>
        </div>
    )
}


export default MyPosts