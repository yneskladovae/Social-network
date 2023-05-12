import {
    follow, followThunkCreator, getUserThunkCreator,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow, unfollowThunkCreator,
    UsersType
} from "../../redux/users-reducer"
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import React, {ComponentType} from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSelector
} from "../../redux/users-selectors";

export type MapStateToPropsType = {
    usersPage: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

type UsersContainerPropsType = {
    usersPage: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    followingInProgress: Array<number>
    getUserThunkCreator: (currentPage: number, pageSize: number) => void
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize)

        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUserThunkCreator(pageNumber, this.props.pageSize)

        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true})
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     })
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
                        onPageChanged={this.onPageChanged}
                        followingInProgress={this.props.followingInProgress}
                        followThunkCreator={this.props.followThunkCreator}
                        unfollowThunkCreator={this.props.unfollowThunkCreator}
                    />}
            </>
        )
    }
}

// const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
//     return {
//         usersPage: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        usersPage: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
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

// export default connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     toggleFollowingProgress,
//     getUserThunkCreator,
//     followThunkCreator,
//     unfollowThunkCreator
// })(UsersContainer);

export default compose<ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUserThunkCreator,
        followThunkCreator,
        unfollowThunkCreator
    }),
    withAuthRedirect
)(UsersContainer)