import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import {dialogsReducer} from './dialogsReducer';

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

let store = createStore(reducers);

export default store