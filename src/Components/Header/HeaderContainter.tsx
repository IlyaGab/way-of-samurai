import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../redux/authReducer';
import {AppStateType} from '../../redux/redux-store';
import Header from './Header';


type HeaderContainerType = MapStateToPropsType & MdtpType

type MdtpType = {
    logout:()=>void
}

type MapStateToPropsType = {
    isAuth:boolean,
    login:string | null,
}


class HeaderContainter extends React.Component<HeaderContainerType> {

    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout} />;
    }
}

const mapStateToProps = (state:AppStateType):MapStateToPropsType => ({
    isAuth: state.authReducer.isAuth,
    login:state.authReducer.login
});


export default connect(mapStateToProps, {logout}) (HeaderContainter)