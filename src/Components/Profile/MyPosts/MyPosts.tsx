import React  from 'react';
import clases from './MyPosts.module.css'
import Post from './Post/Post';
import {ActionsTypes, addPostActionCreator, PostType, updateNewPostActionCreator} from '../../../redux/state';


type MyPostsType = {
    postData: Array<PostType>
    newPostText:string
    dispatch:(action:ActionsTypes)=>void
}



export const MyPosts = (props: MyPostsType) => {
    let postData = props.postData

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
            props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        if(newPostElement.current){
            let text =  newPostElement.current.value
            let action = updateNewPostActionCreator(text)
            props.dispatch(action)
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
                        <Post postData={postData} />
            </div>
        </div>
    )
}


export default MyPosts