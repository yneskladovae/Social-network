import React from "react";
import s from './Friends.module.css'
import {Friends} from "./Friends/Friends";
import {SidebarFriendsContainer} from "./SidebarFriendsContainer";

export const SidebarFriends = () => {
    return (
        <div className={s.friends}>
            <div className={s.friends__items}>
                <h2>Friends</h2>
                <div className={s.friends_container}>
                    <SidebarFriendsContainer/>
                </div>
            </div>
        </div>
    );
};