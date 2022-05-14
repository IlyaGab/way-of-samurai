import React from "react";
import clases from './Profile.module.css'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import {DialogPageType, ProfilePageType} from '../../redux/store';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {EmptyObject, Store} from 'redux';


// type ProfileProps = {
//  store:Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogPageType; }>
// }


const Profile = () => {
    return (
        <div className={clases.content}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>

    )
}

export default Profile