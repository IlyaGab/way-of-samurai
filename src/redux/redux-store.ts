import {applyMiddleware, combineReducers} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {usersReducer} from './usersReducer';
import {authReducer} from './authReducer';
import thunkMiddleware from 'redux-thunk'


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authReducer: authReducer
})
type ReducersType = typeof rootReducer
export type AppStateType = ReturnType<ReducersType>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store

export default store