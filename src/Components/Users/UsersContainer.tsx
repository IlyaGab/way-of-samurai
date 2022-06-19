import {connect} from 'react-redux';
import {
    ArrayUsersType, follow, getUsersThunkCreator,
    setFetching, setPage, setToggleFollowingProgress, setTotalCount, setUsers, unfollow,
    UsersType
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/redux-store';
import React from 'react';
import UsersFunctionalComponent from './UsersFunctionalComponent';
import Preloader from '../common/preloader/Preloader';

type MapStateUsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>

}

type MapDispatchUsersPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
    setPage: (currentPage: number) => void
    setTotalCount: (totalUsersCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    setfollowingInProgress: (isFetching: boolean, userID: number) => void
    getUsersThunkCreator:any
}

export type UsersPageType = MapStateUsersPropsType & MapDispatchUsersPropsType

class UsersContainer extends React.Component<UsersPageType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersFunctionalComponent
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): ArrayUsersType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setPage,
        setTotalCount,
        setFetching,
        setToggleFollowingProgress,
        getUsersThunkCreator
    }
)(UsersContainer);