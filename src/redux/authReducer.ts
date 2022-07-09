import {Dispatch} from 'redux';
import {authAPI} from '../API/api';
import {AppThunk} from './redux-store';
import { stopSubmit} from 'redux-form';


const SET_USER_DATA = 'SET_USER_DATA'

export type AuthReducerStateType = {
    userId: number ,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

let initialState: AuthReducerStateType = {
    userId: 0,
    email: null,
    login: null,
    isAuth: false
}

export type setAuthUserDataAT = ReturnType<typeof setAuthUserData>

type ActionsType = setAuthUserDataAT

export const authReducer = (state: AuthReducerStateType = initialState, action: ActionsType): AuthReducerStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


export const setAuthUserData = (userId: number, email: string, login: string, isAuth:boolean) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
}) as const

export const getAuthUserData = () => (dispatch: Dispatch<ActionsType>) => {
   return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        }
    )
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {

    authAPI.login(email,password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                dispatch(stopSubmit('login', {_error: response.data.messages}))
            }
        }
    )
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(0, '', '', false))
                }
            }
        )
}