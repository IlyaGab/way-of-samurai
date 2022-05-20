import {combineReducers} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import profileReducer from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {usersReducer} from './usersReducer';




let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})
type ReducersType = typeof rootReducer
export type AppStateType = ReturnType<ReducersType>

let store = createStore(rootReducer);


export default store