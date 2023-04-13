import s from "./Users.module.css"
import {InitialStateType, setCurrentPageAC, UsersType} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";

type UsersPropsType = {
    usersPage: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i += 1) {
            pages.push(i);
        }

        let slicedPages;
        const curPage = this.props.currentPage;
        if (curPage - 3 < 0) {
            slicedPages = pages.slice(0, 5);
        } else {
            slicedPages = pages.slice(curPage - 3, curPage + 2);
        }

        // const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        // const pages = []
        // for (let i = 1; i <= pagesCount; i++) {
        //     pages.push(i)
        // }

        return (
            <div>
                {slicedPages.map(el => {
                    return (
                        <span onClick={() => this.onPageChanged((el))}
                              className={this.props.currentPage === el ? s.selectedPage : ""}>{el}</span>
                    )
                })}
                {this.props.usersPage.map(el => {
                    return (
                        <div key={el.id}>
                            <img style={{width: '80px'}} src={el.photos.small !== null ? el.photos.small : 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'}
                                 alt="user_avatar"/>
                            <div>Name: {el.name}</div>
                            <div>Status: {el.status}</div>
                            <div>
                                {!el.followed
                                    ? <button onClick={() => this.props.follow(el.id)}>Follow</button>
                                    : <button onClick={() => this.props.unfollow(el.id)}>Unfollow</button>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Users;