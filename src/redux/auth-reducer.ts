import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching} from "./users-reducer";

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const AuthReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA': {
            return {
                ...state, ...action.data,
                isAuth: true
            }
        }
    }
    return state;
}

export type ActionsTypes = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (data: InitialStateType) => {
    return {
        type: "SET-AUTH-USER-DATA",
        data
    } as const
}

export const authUserData = () => {
    return (dispatch: Dispatch) => {
        usersAPI.isAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data))
                }
            })
    }
}

export default AuthReducer;