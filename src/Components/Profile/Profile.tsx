import React from "react";
import clases from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props:any) => {
    let postData = [
        {id:1, message:'Hi, how are you?', likesCount:12},
        {id:2, message:'Its my first post', likesCount:11},
        {id:3, message:'blabla', likesCount:11},
        {id:4, message:'fafa', likesCount:11}

    ]
    return (
        <div className={clases.content}>
            <ProfileInfo />
            <MyPosts postData={postData}/>
        </div>

    )
}

export default Profile