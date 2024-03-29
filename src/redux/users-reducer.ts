import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type InitialStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type UsersType = {
    id: number
    name: string
    uniqueUrlName: string,
    status: string
    photos: UserPhotoType
    followed: boolean
}

type UserPhotoType = {
    small: string
    large: string
}

const initialState: InitialStateType = {
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    users: [] as UsersType[],
    followingInProgress: []
}

export type UsersActionsType =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)
            }
        }
        case "SET_USERS": {
            return {
                ...state, users: action.users
            }
        }
        case "SET_CURRENT_PAGE": {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {
                ...state, totalUsersCount: action.totalCount
            }
        }
        case "TOGGLE_IS_FETCHING": {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case "TOGGLE_IS_FOLLOWING_PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const follow = (userId: number) => ({type: "FOLLOW", userId}) as const
export const unfollow = (userId: number) => ({type: "UNFOLLOW", userId}) as const
export const setUsers = (users: UsersType[]) => ({type: "SET_USERS", users}) as const
export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage}) as const
export const setTotalUsersCount = (totalCount: number) => ({type: "SET_TOTAL_USERS_COUNT", totalCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching}) as const
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetching,
    userId
}) as const

export const getUserThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setCurrentPage(currentPage))
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const followThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.setFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unfollowThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.setUnfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export default usersReducer;