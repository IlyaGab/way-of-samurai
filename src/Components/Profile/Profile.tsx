import React from "react";
import clases from './Profile.module.css'
import  {PostDataType} from '../../index';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props:PostDataType) => {
    let postData = props.postData
    let dialogs = props.dialogs
    let messages = props.messages
    return (
        <div className={clases.content}>
            <ProfileInfo />
            <MyPosts postData={postData} messages={messages} dialogs={dialogs}/>
        </div>

    )
}

export default Profile