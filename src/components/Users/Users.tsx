import s from "./Users.module.css"
import {UsersType} from "../../redux/users-reducer";
import React from "react";
import {v1} from "uuid";

type UsersPropsType = {
    users: UsersType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
}

export const Users: React.FC<UsersPropsType> = ({users, follow, unfollow, setUsers})  => {

    if (users.length === 0) {
        setUsers([
            {
                id: v1(),
                fullName: 'Denis',
                status: 'Lorem ipsum dolor sit amet',
                location: {
                    city: 'Minsk',
                    country: 'Belarus',
                },
                isFollow: false,
            },
            {
                id: v1(),
                fullName: 'Stas',
                status: 'Mymy',
                location: {
                    city: 'Gomel',
                    country: 'Belarus',
                },
                isFollow: true,
            },
            {
                id: v1(),
                fullName: 'Tima',
                status: 'viscas el barka',
                location: {
                    city: 'barcelona',
                    country: 'Belarus',
                },
                isFollow: false,
            },
            {
                id: v1(),
                fullName: 'Anna',
                status: 'mew mew',
                location: {
                    city: 'Gomel',
                    country: 'Belarus',
                },
                isFollow: false,
            },
            {
                id: v1(),
                fullName: 'Crish',
                status: 'Siiiiiiiiiiiii',
                location: {
                    city: 'Minsk',
                    country: 'Belarus',
                },
                isFollow: true,
            },
        ])
    }

    return (
        <div>
            {users?.map(el => {
                return (
                    <div>
                        {el.id}, {el.isFollow}, {el.fullName}, {el.status}, {el.location.city}
                        <div>
                            {!el.isFollow
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