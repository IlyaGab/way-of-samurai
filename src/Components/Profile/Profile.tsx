import React from "react";
import clases from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div className={clases.content}>
            <ProfileInfo />
            <MyPosts/>
        </div>

    )
}

export default Profile