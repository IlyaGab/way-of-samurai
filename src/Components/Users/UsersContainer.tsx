import {connect} from 'react-redux';
import {
    ArrayUsersType, follow,
    setFetching, setPage, setToggleFollowingProgress, setTotalCount, setUsers, unfollow,
    UsersType
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/redux-store';
import React from 'react';
import UsersFunctionalComponent from './UsersFunctionalComponent';
import Preloader from '../common/preloader/Preloader';
import {usersAPI} from '../../API/api';

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
    setfollowingInProgress:(isFetching:boolean, userID:number) => void
}

export type UsersPageType = MapStateUsersPropsType & MapDispatchUsersPropsType

class UsersContainer extends React.Component<UsersPageType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount = 200)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setPage(pageNumber)
        this.props.setIsFetching(true)
        usersAPI.getUsers(pageNumber,this.props.pageSize )
               .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
            });
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
                setToggleFollowingProgress={this.props.setfollowingInProgress}
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
        followingInProgress:state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
        follow: follow,
        unfollow: unfollow,
        setUsers: setUsers,
        setPage: setPage,
        setTotalCount: setTotalCount,
        setIsFetching: setFetching,
        setfollowingInProgress: setToggleFollowingProgress
    }
)(UsersContainer);