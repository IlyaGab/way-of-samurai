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
    status:string,
    loginnedUserId:number,
    isAuth:boolean
}
export type mapProfileDispatchToPropsType = {
    getUserProfile: (userID:number) => void
    getStatus: (userID:number) => void
    updateStatus: (status: string)=>void
}

export type ProfileContainerPropsType = mapProfileStateToPropsType & mapProfileDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
    let userId = Number(this.props.match.params.userId)
        if(!userId) {
            userId = this.props.loginnedUserId
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}



let mapStateToProps = (state:AppStateType) :mapProfileStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status:state.profilePage.status,
        loginnedUserId: state.authReducer.userId,
        isAuth:state.authReducer.isAuth
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile, getStatus, updateStatus }),
    withAuthRedirect,
    withRouter
)(ProfileContainer)


