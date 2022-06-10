const SET_USER_DATA = 'SET_USER_DATA'

export type AuthReducerStateType = {
    userId:number | null,
     email:string | null,
     login:string | null,
    isAuth: boolean
}

let initialState: AuthReducerStateType = {
    userId:null,
    email:null,
    login:null,
    isAuth: false
}

export type setAuthUserDataAT = ReturnType<typeof setAuthUserData>

type ActionsType = setAuthUserDataAT

export const authReducer = (state:AuthReducerStateType = initialState, action:ActionsType):AuthReducerStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data,
                isAuth:true
            }
        default:
            return state;
    }
}


export const setAuthUserData = (userId:number, email:string, login:string) => ({type: SET_USER_DATA, data:{userId, email, login} }) as const