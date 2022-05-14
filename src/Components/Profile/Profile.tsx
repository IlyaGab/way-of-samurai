import React from "react";
import clases from './Profile.module.css'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import { StoreTypes} from '../../redux/store';
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfileProps = {
 store:StoreTypes
}


const Profile = (props:ProfileProps) => {
    return (
        <div className={clases.content}>
            <ProfileInfo />
            <MyPostsContainer store={props.store}  />
        </div>

    )
}

export default Profile