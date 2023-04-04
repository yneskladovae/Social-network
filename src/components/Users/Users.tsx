import s from "./Users.module.css"
import {InitialStateType, UsersType} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";

type UsersPropsType = {
    usersPage: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                console.log(response.data.items)
                this.props.setUsers(response.data.items)
                console.log(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {this.props.usersPage.map(el => {
                    return (
                        <div key={el.id}>
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