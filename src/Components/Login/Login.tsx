import React from 'react';
import {FormDataType, ReduxLoginForm} from './LoginForm';
import {connect} from 'react-redux';
import { login} from '../../redux/authReducer'
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';



type LoginPropsType = {
    login:(email:string, password:string, rememberMe:boolean)=> void
    isAuth:boolean
}

const Login = (props:LoginPropsType) => {

    const onSubmit = (formData:FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
};

const mstp = (state:AppStateType) => {
    return {
        isAuth: state.authReducer.isAuth
    }

}

export default connect(mstp, {login})(Login);