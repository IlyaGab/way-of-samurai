import {connect} from 'react-redux';
import Users from './Users';
import {
    ArrayUsersType,
    followAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from '../../redux/usersReducer';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import UsersC from './UsersC';

type MapStateUsersPropsType = {
    usersPage: ArrayUsersType
}

type MapDispatchUsersPropsType = {
    follow:(userID:number)=> void
    unfollow:(userID:number)=> void
    setUsersAC:(users:Array<UsersType>)=>void
}

export type UsersPageType = MapStateUsersPropsType & MapDispatchUsersPropsType


let mapStateToProps = (state: AppStateType):MapStateUsersPropsType => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps= (dispatch: Dispatch):MapDispatchUsersPropsType => {
    return {
        follow: (userID: number)=>dispatch(followAC(userID)),
        unfollow: (userID: number)=>dispatch(unfollowAC(userID)),
        setUsersAC: (users: Array<UsersType>) => dispatch(setUsersAC(users))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersC);