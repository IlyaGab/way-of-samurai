import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/authReducer';
import {AppStateType} from '../../redux/redux-store';

type HeaderContainerType = MapStateToPropsType & MapDispatchTOPropsType


type PropsType= {
    id:number ,
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials:true
        }).then(response => {
          if( response.data.resultCode === 0) {
              this.props.setAuthUserData(response.data.data.id,response.data.data.email, response.data.data.login)
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