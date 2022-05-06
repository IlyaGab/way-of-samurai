import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {RootStateType} from './redux/state';
import Dialogs from './Components/Dialogs/Dialogs';



type AppPageProps = {
    appState:RootStateType
    dispatch:(action:any)=> void
    addMessage: (userMessage:string)=>void
}



function App(props:AppPageProps) {
    let postData = props.appState.profilePage.posts
    let newPostText = props.appState.profilePage.newPostText
    let dialogs = props.appState.dialogsPage.dialogs
    let messages = props.appState.dialogsPage.messages

    return (
            <div className="app-wrapper">
                <Header/>
                <Navigation/>
                <div className="app-wrapper-content">
                        <Route path='/dialogs' render={()=>(<Dialogs dialogs={dialogs} messages={messages} addMessage={props.addMessage} />)} />
                        <Route path='/profile'  render={()=>(<Profile postData={postData} newPostText={newPostText} dispatch={props.dispatch}  />)}  />
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                </div>
            </div>
    );
}

export default App;
