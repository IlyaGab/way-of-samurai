import React from 'react';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Navigation from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';



function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
                <Dialogs/>
            {/*<Profile />*/}
            </div>

        </div>
    );
}

export default App;
