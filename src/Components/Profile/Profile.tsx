import React from "react";
import clases from './Profile.module.css'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import {PostType, ProfilePageType} from '../../redux/state';

type ProfileProps = {
    postData: Array<PostType>
    newPostText:string
    dispatch:(action:any)=>void
}


const Profile = (props:ProfileProps) => {
    let postData = props.postData
    let newPostText = props.newPostText
    return (
        <div className={clases.content}>
            <ProfileInfo />
            <MyPosts postData={postData} dispatch={props.dispatch} newPostText={newPostText} />
        </div>

    )
}

export default Profile