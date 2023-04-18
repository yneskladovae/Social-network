import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarFriends: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store;