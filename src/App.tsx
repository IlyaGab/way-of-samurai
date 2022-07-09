import React from 'react';
import './App.css';
import Navigation from './Components/Nav/Nav';
import {Route, withRouter} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import HeaderContainter from './Components/Header/HeaderContainter';
import Login from './Components/Login/Login';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { initializeApp} from './redux/app-reducer';
import {AppStateType} from './redux/redux-store';
import Preloader from './Components/common/preloader/Preloader';


type AppMstpType = {
    initialized:boolean
}

type AppMdtpType = {
    initializeApp: ()=>void
}

type AppPropsType = AppMstpType & AppMdtpType


class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainter/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => (<DialogsContainer/>)}/>
                    <Route path="/profile/:userId?" render={() => (<ProfileContainer/>)}/>
                    <Route path="/users" render={() => (<UsersContainer/>)}/>
                    <Route path="/login" component={() => (<Login/>)}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        );
    }
}

const mstp = (state:AppStateType):AppMstpType => {
    return {
        initialized:state.app.initialized
    }
}


export default compose<React.ComponentType>(
    connect(mstp, {initializeApp}),
    withRouter)
(App);
