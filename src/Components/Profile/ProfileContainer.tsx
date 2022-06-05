import React from 'react';
import Profile from './Profile';
import {setUserProfile} from '../../redux/profileReducer';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';


export type ProfileStatePropsType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsPropsType
    photos: PhotosPropsType
}

type ContactsPropsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PhotosPropsType = {
    small:string
    large:string
}

export type mapProfileStateToPropsType = {
    profile:ProfileStatePropsType | null
}
export type mapProfileDispatchToPropsType = {
    setUserProfile: (profile:ProfileStatePropsType)=>void
}

export type ProfileContainerPropsType = mapProfileStateToPropsType & mapProfileDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
           this.props.setUserProfile(response.data)
        })
    }

    render() {

        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state:AppStateType) :mapProfileStateToPropsType => {
    debugger
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {
setUserProfile,
})
(ProfileContainer);