import React from "react";
import clases from './Profile.module.css'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import {PostType, ProfilePageType} from '../../redux/state';

type ProfileProps = {
    postData: Array<PostType>
    newPostText:string
    addPost: ()=>void
    updateNewPostText: (newText:string)=>void
}


const Profile = (props:ProfileProps) => {
    let postData = props.postData
    let newPostText = props.newPostText
    return (
        <div className={clases.content}>
            <ProfileInfo />
            <MyPosts postData={postData} addPost={props.addPost} newPostText={newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>

    )
}

export default Profile