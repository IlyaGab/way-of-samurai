import React from 'react';
import {connect} from 'react-redux';
import {getAuthUserData, logout} from '../../redux/authReducer';
import {AppStateType} from '../../redux/redux-store';
import Header from './Header';


type HeaderContainerType = MapStateToPropsType & MapDispatchTOPropsType

type PropsType1= {
    userId:number ,
    email:string ,
    login:string ,
}

type MapStateToPropsType = {
    isAuth:boolean,
    login:string,
}

type MapDispatchTOPropsType = {
    getAuthUserData: ()=> void
}

class HeaderContainter extends React.Component<any> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout} />;
    }
}

const mapStateToProps = (state:AppStateType) => ({
    isAuth: state.authReducer.isAuth,
    login:state.authReducer.login

});


export default connect(mapStateToProps, {getAuthUserData, logout}) (HeaderContainter)