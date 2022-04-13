import React from 'react';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Navigation from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { PostDataType} from './index' ;
import dialogs from './Components/Dialogs/Dialogs';



function App(props:PostDataType ) {
    let postData = props.postData
    let dialogs = props.dialogs
    let messages = props.messages
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navigation/>
                <div className="app-wrapper-content">
                        <Route path='/dialogs' render={()=>(<Dialogs postData={postData} dialogs={dialogs} messages={messages} />)} />
                        <Route path='/profile'  render={()=>(<Profile postData={postData} dialogs={dialogs} messages={messages}/>)}  />
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
