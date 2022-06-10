import React from 'react';
import Profile from './Profile';
import {setUserProfile} from '../../redux/profileReducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {usersAPI} from '../../API/api';


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
        usersAPI.setUsers(this.props.match.params.userId).then(data => {
           this.props.setUserProfile(data)
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
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
setUserProfile,
})
(WithUrlDataContainerComponent);