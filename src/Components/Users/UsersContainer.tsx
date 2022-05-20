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

type UsersContainerPropsType = {
    usersPage: ArrayUsersType
}


let mapStateToProps = (state: UsersContainerPropsType) => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps= (dispatch: Dispatch) => {
    return {
        follow: (userID: number)=>dispatch(followAC(userID)),
        unfollow: (userID: number)=>dispatch(unfollowAC(userID)),
        setUsersAC: (users: Array<UsersType>) => dispatch(setUsersAC(users))
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Users);