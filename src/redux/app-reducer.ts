import {getAuthUserData} from './authReducer';
import {AppThunk} from './redux-store';


const SET_INITIALIZED = 'SET_INITIALIZED'

type AppReducerType = {
    initialized: boolean
}

type ActionsType = ReturnType<typeof initializedSuccess>

let initialState: AppReducerType = {
    initialized: false
}

export const appReducer = (state: AppReducerType = initialState, action: ActionsType): AppReducerType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: SET_INITIALIZED}) as const;

export const initializeApp = ():AppThunk => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then (()=>{
        dispatch(initializedSuccess())
    })

}

export default appReducer