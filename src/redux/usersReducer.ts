export type UsersLocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: number
    followed: boolean
    photoURL: string
    name: string
    status: string
    location: UsersLocationType
}
export type ArrayUsersType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
}
export type ActionsTypesOfUsersPage = ReturnType<typeof follow>
    & ReturnType<typeof unfollow>
    & ReturnType<typeof setUsers>
    & ReturnType<typeof setPage>
    & ReturnType<typeof setTotalCount>
    & ReturnType<typeof setFetching>
    & ReturnType<typeof setToggleFollowingProgress>

let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
let TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'


let initialState: ArrayUsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 3,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: ArrayUsersType = initialState, action: ActionsTypesOfUsersPage): ArrayUsersType => {
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
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_IN_PROGRESS :
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : [...state.followingInProgress.filter(id => id !== action.userID)]
            }
        default:
            return state
    }
}

export const follow = (userID: number) => {
    return {
        type: FOLLOW,
        userID: userID
    } as const
}
export const unfollow = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID: userID
    } as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        users: users
    } as const

}
export const setPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setTotalCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        count: totalUsersCount
    } as const
}
export const setFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}

export const setToggleFollowingProgress = (isFetching: boolean, userID: number) => {
    return {
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        isFetching,
        userID
    } as const
}
