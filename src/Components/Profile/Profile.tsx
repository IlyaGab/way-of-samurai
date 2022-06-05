import React from "react";
import clases from './Profile.module.css'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileStatePropsType} from './ProfileContainer';



type ProfilePresentPageType = {
    profile: ProfileStatePropsType | null
}

const Profile = (props:ProfilePresentPageType) => {
    return (
        <div className={clases.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>

    )
}

export default Profile