import {connect} from 'react-redux';
import Users from './Users';
import {
    ArrayUsersType,
    followAC, setPageAC, setTotalCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from '../../redux/usersReducer';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import UsersC from './UsersC';

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


export default connect(mapStateToProps, mapDispatchToProps)(UsersC);