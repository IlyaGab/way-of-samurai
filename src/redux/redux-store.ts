import { applyMiddleware, combineReducers} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import {profileReducer, ProfileReducerActionsType} from './profileReducer';
import {DialogReducerActionTypes, dialogsReducer} from './dialogsReducer';
import {ActionsTypesOfUsersPage, usersReducer} from './usersReducer';
import {authReducer} from './authReducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {FormAction, reducer as formReducer} from 'redux-form'
import appReducer from './app-reducer';


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authReducer: authReducer,
    form: formReducer,
    app:appReducer
})
type ReducersType = typeof rootReducer
export type AppStateType = ReturnType<ReducersType>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export type AppActionsTypes = DialogReducerActionTypes | ProfileReducerActionsType | ActionsTypesOfUsersPage | FormAction

export type AppThunk <ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsTypes>

//@ts-ignore
window.store = store

export default store