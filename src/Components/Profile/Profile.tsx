import React from "react";
import clases from './Profile.module.css'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import {PostType, ProfilePageType} from '../../redux/state';

type ProfileProps = {
    postData: Array<PostType>
    addPost: (postMessage:string)=>void
}


const Profile = (props:ProfileProps) => {
    let postData = props.postData
    return (
        <div className={clases.content}>
            <ProfileInfo />
            <MyPosts postData={postData} addPost={props.addPost}/>
        </div>

    )
}

export default Profile