

export type UsersLocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: number
    followed: boolean
    photoURL:string
    name: string
    status: string
    location: UsersLocationType
}
export type ArrayUsersType = {
    users: Array<UsersType>
}
export type ActionsTypesOfUsersPage = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS '


let initialState = {
    users: [],
}

export const usersReducer = (state:ArrayUsersType = initialState, action: any): ArrayUsersType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        userID: userID
    } as const
}

export const unfollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID: userID
    } as const
}
export const setUsersAC = (users:Array<UsersType>) => {
    return {
        type: SET_USERS,
        users: users
    } as const

}
