import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import {Route} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { StoreTypes} from './redux/store';
import DialogsContainer from './Components/Dialogs/DialogsContainer';



type AppPageProps = {
    store:StoreTypes
}

function App(props:AppPageProps) {

    return (
            <div className="app-wrapper">
                <Header/>
                <Navigation/>
                <div className="app-wrapper-content">
                        <Route path='/dialogs' render={()=>(<DialogsContainer store={props.store}  /> )} />
                        <Route path='/profile'  render={()=>(<Profile store={props.store}   />)}  />
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                </div>
            </div>
    );
}

export default App;
