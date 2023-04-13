import {Dispatch} from "redux"
import {follow, InitialStateType, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, unfollow, UsersType} from "../../redux/users-reducer"
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

export type MapStateToPropsType = {
    usersPage: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}

type UsersContainerPropsType = {
    usersPage: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader/>
                    : <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        usersPage={this.props.usersPage}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        onPageChanged={this.onPageChanged}
                    />}
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userId) => dispatch(follow(userId)),
//         unfollow: (userId) => dispatch(unfollow(userId)),
//         setUsers: (users: UsersType[]) => dispatch(setUsers(users)),
//         setCurrentPage: (currentPage: number) => dispatch(setCurrentPage(currentPage)),
//         setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCount(totalCount)),
//         setIsFetching: (isFetching: boolean) => dispatch(setIsFetching(isFetching)),
//     }
// }

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching,})(UsersContainer);