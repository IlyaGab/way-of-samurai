import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../redux/redux-store';
import {connect} from 'react-redux';

type MapStateToPropsForRedirectType = {
    isAuth:boolean
}

let mapStateToPropsForRedirect = (state: AppStateType) : MapStateToPropsForRedirectType => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

export function withAuthRedirect<T>(Component:ComponentType<T>){

    const RedirectComponent = (props:MapStateToPropsForRedirectType) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to="/login"/>
        
        return <Component {...restProps as T} />
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}