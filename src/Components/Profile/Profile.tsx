import React from "react";
import clases from './Profile.module.css'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileStatePropsType} from './ProfileContainer';



type ProfilePresentPageType = {
    profile: ProfileStatePropsType | null
    status:string
    updateStatus:(status:string)=>void
}

const Profile = (props:ProfilePresentPageType) => {
    return (
        <div className={clases.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>

    )
}

export default Profile