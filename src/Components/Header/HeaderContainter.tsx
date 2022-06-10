import React from 'react';

import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/authReducer';
import {AppStateType} from '../../redux/redux-store';
import {usersAPI} from '../../API/api';
import Header from './Header';

type HeaderContainerType = MapStateToPropsType & MapDispatchTOPropsType


type PropsType= {
    userId:number ,
    email:string ,
    login:string ,
}

type MapStateToPropsType = {
    isAuth:boolean,
    login:string,
}

type MapDispatchTOPropsType = {
    setAuthUserData: (id:number, email:string, login:string) => void
}

class HeaderContainter extends React.Component<any> {
    componentDidMount() {
        usersAPI.setAuthUserDataDAL().then(data => {
          if( data.resultCode === 0) {
              let{id, email, login} = data.data
              this.props.setAuthUserData(id,email,login)
          }
            }
        )
    }

    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login} />;
    }
}

const mapStateToProps = (state:AppStateType) => ({
    isAuth: state.authReducer.isAuth,
    login:state.authReducer.login,

});


export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainter)