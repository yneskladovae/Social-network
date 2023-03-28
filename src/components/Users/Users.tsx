import s from "./Users.module.css"
import {UsersType} from "../../redux/users-reducer";
import React from "react";
import {v1} from "uuid";
import axios from "axios";

type UsersPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

export const Users: React.FC<UsersPropsType> = ({users, follow, unfollow, setUsers}) => {

    const getUsers = () => {
        if (users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    setUsers(response.data.items)
                })
            // setUsers([
            //     {
            //         id: v1(),
            //         fullName: 'Denis',
            //         status: 'Lorem ipsum dolor sit amet',
            //         location: {
            //             city: 'Minsk',
            //             country: 'Belarus',
            //         },
            //         isFollow: false,
            //     },
            //     {
            //         id: v1(),
            //         fullName: 'Stas',
            //         status: 'Mymy',
            //         location: {
            //             city: 'Gomel',
            //             country: 'Belarus',
            //         },
            //         isFollow: true,
            //     },
            //     {
            //         id: v1(),
            //         fullName: 'Tima',
            //         status: 'viscas el barka',
            //         location: {
            //             city: 'barcelona',
            //             country: 'Belarus',
            //         },
            //         isFollow: false,
            //     },
            //     {
            //         id: v1(),
            //         fullName: 'Anna',
            //         status: 'mew mew',
            //         location: {
            //             city: 'Gomel',
            //             country: 'Belarus',
            //         },
            //         isFollow: false,
            //     },
            //     {
            //         id: v1(),
            //         fullName: 'Crish',
            //         status: 'Siiiiiiiiiiiii',
            //         location: {
            //             city: 'Minsk',
            //             country: 'Belarus',
            //         },
            //         isFollow: true,
            //     },
            // ])
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {users?.map(el => {
                return (
                    <div key={el.id}>
                        <div>Name: {el.name}</div>
                        <div>Status: {el.status}</div>
                        <div>
                            {!el.followed
                                ? <button onClick={() => follow(el.id)}>Follow</button>
                                : <button onClick={() => unfollow(el.id)}>Unfollow</button>
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}