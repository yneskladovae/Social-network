import {Dispatch} from "redux"
import {followAC, InitialStateType, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer"
import s from "./Users.module.css"
import {connect} from "react-redux";
// import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import Users from "./UsersС";

export type MapStateToPropsType = {
    users: UsersType[]
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users: UsersType[]) => dispatch(setUsersAC(users)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);