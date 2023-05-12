import {AppThunk} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

const initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState

const appReducer = (state: InitialStateType = initialState, action: AppActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-INITIALIZED-SUCCESS': {
            return {
                ...state,
                initialized: action.initialized
            }
        }
        default:
            return state
    }
}

export type AppActionsTypes = ReturnType<typeof initializedSuccessAC>

export const initializedSuccessAC = (initialized: boolean) => {
    return {
        type: "SET-INITIALIZED-SUCCESS",
        initialized
    } as const
}

export const initializeAppTC = (): AppThunk => (dispatch) => {
    const promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccessAC(true))
        })
}

export default appReducer;