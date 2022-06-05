import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Nav/Nav';
import {Route} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {DialogsContainer} from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';



function App() {

    return (
            <div className="app-wrapper">
                <Header/>
                <Navigation/>
                <div className="app-wrapper-content">
                        <Route path='/dialogs' render={()=>(<DialogsContainer   /> )} />
                        <Route path='/profile/:userId?'  render={()=>(<ProfileContainer  />)}  />
                        <Route path='/users' render={()=>(<UsersContainer />)}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                </div>
            </div>
    );
}

export default App;
