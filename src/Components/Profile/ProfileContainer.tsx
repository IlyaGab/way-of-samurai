import React from 'react';
import Profile from './Profile';
import {getUserProfile} from '../../redux/profileReducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';



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
    profile:ProfileStatePropsType | null,
    isAuth:boolean
}
export type mapProfileDispatchToPropsType = {
    getUserProfile: (userID:string) => void
}

export type ProfileContainerPropsType = mapProfileStateToPropsType & mapProfileDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
    let userId = this.props.match.params.userId
        if(!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state:AppStateType) :mapProfileStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.authReducer.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
getUserProfile,
})
(WithUrlDataContainerComponent);