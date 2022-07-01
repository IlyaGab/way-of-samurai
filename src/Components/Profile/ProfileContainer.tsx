import React from 'react';
import Profile from './Profile';
import {getStatus, getUserProfile, updateStatus} from '../../redux/profileReducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';
import {compose} from 'redux';



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
    status:string
}
export type mapProfileDispatchToPropsType = {
    getUserProfile: (userID:string) => void
    getStatus: (userID:string) => void
    updateStatus: (status: string)=>void
}

export type ProfileContainerPropsType = mapProfileStateToPropsType & mapProfileDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
    let userId = this.props.match.params.userId
        if(!userId) {
            userId = '24082'
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}



let mapStateToProps = (state:AppStateType) :mapProfileStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status:state.profilePage.status
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile, getStatus, updateStatus }),
    withAuthRedirect,
    withRouter
)(ProfileContainer)


