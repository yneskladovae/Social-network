import s from "./Users.module.css"
import {toggleFollowingProgress, UsersType} from "../../redux/users-reducer";
import React from "react";
import {NavLink} from "react-router-dom";
import avatarUndefined from "../../assets/img/avatarUndefind.png"
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    usersPage: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}

export const Users: React.FC<UsersPropsType> = ({
                                                    usersPage,
                                                    pageSize,
                                                    totalUsersCount,
                                                    currentPage,
                                                    follow,
                                                    unfollow,
                                                    onPageChanged,
                                                    toggleFollowingProgress,
                                                    followingInProgress
                                                }) => {

    // const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    // const pages = []
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    // }

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }

    let slicedPages;
    const curPage = currentPage;
    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
    } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2);
    }

    return (
        <div>
            {slicedPages.map((el, index) => {
                return (
                    <span key={index} onClick={() => onPageChanged((el))}
                          className={currentPage === el ? s.selectedPage : ""}>{el}</span>
                )
            })}
            {usersPage.map(el => {
                return (
                    <div key={el.id}>
                        <div>
                            <NavLink to={'/profile/' + el.id}>
                                <img style={{width: '80px'}}
                                     src={el.photos.small !== null ? el.photos.small : avatarUndefined}
                                     alt="user_avatar"
                                />
                            </NavLink>
                        </div>
                        <div>Name: {el.name}</div>
                        <div>Status: {el.status}</div>
                        <div>
                            {!el.followed
                                ? <button disabled={followingInProgress.some(id => id === el.id)} onClick={() => {
                                    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                    //     withCredentials: true,
                                    //     headers: {
                                    //         'API-KEY': '3e0c4b7e-0bea-4155-a31d-3500dd1e1abc'
                                    //     }
                                    // })
                                    toggleFollowingProgress(true, el.id)
                                    usersAPI.setFollow(el.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                follow(el.id)
                                            }
                                            toggleFollowingProgress(false,  el.id)
                                        })
                                }}>Follow</button>
                                : <button disabled={followingInProgress.some(id => id === el.id)} onClick={() => {
                                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                    //     withCredentials: true,
                                    //     headers: {
                                    //         'API-KEY': '3e0c4b7e-0bea-4155-a31d-3500dd1e1abc'
                                    //     }
                                    // })
                                    toggleFollowingProgress(true,  el.id)
                                    usersAPI.setUnfollow(el.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                unfollow(el.id)
                                            }
                                            toggleFollowingProgress(false,  el.id)
                                        })
                                }}>Unfollow</button>
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}