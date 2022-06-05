import React from 'react';
import Profile from './Profile';
import {setUserProfile} from '../../redux/profileReducer';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';


type PathParamsType = {
    userId:string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

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

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
           this.props.setUserProfile(response.data)
        })
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
setUserProfile,
})
(WithUrlDataContainerComponent);