import {connect} from 'react-redux';
import {
    ArrayUsersType, follow,
    setFetching, setPage, setTotalCount, setUsers, unfollow,
    UsersType
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/redux-store';
import React from 'react';
import axios from 'axios';
import UsersFunctionalComponent from './UsersFunctionalComponent';
import Preloader from '../common/preloader/Preloader';

type MapStateUsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchUsersPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
    setPage: (currentPage: number) => void
    setTotalCount: (totalUsersCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}

export type UsersPageType = MapStateUsersPropsType & MapDispatchUsersPropsType

class UsersContainer extends React.Component<UsersPageType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&totalCount=${this.props.pageSize}`,{withCredentials:true}).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount = 200)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&totalCount=${this.props.pageSize}`, {withCredentials:true})
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
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
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {
        follow: follow,
        unfollow: unfollow,
        setUsers: setUsers,
        setPage: setPage,
        setTotalCount: setTotalCount,
        setIsFetching: setFetching
    }
)(UsersContainer);