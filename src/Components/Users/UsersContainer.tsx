import {connect} from 'react-redux';
import {
    ArrayUsersType,
    followAC, setPageAC, setTotalCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from '../../redux/usersReducer';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import React from 'react';
import axios from 'axios';
import UsersFunctionalComponent from './UsersFunctionalComponent';

type MapStateUsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount:number
    currentPage:number
}

type MapDispatchUsersPropsType = {
    follow:(userID:number)=> void
    unfollow:(userID:number)=> void
    setUsers:(users:Array<UsersType>)=>void
    setPage: (currentPage:number)=>void
    setTotalCount: (totalUsersCount:number)=>void
}

export type UsersPageType = MapStateUsersPropsType & MapDispatchUsersPropsType

class UsersContainer extends React.Component<UsersPageType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&totalCount=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        });
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&totalCount=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    };

    render() {
        return <UsersFunctionalComponent
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

let mapStateToProps = (state: AppStateType):ArrayUsersType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

    }
}

let mapDispatchToProps= (dispatch: Dispatch):MapDispatchUsersPropsType => {
    return {
        follow: (userID: number)=>dispatch(followAC(userID)),
        unfollow: (userID: number)=>dispatch(unfollowAC(userID)),
        setUsers: (users: Array<UsersType>) => dispatch(setUsersAC(users)),
        setPage: (currentPage: number) => dispatch(setPageAC(currentPage)),
        setTotalCount: (totalUsersCount:number)=> dispatch(setTotalCountAC(totalUsersCount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);