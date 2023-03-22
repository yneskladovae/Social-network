import React from "react";
import s from './Friends.module.css'
import {Friends} from "./Friends/Friends";
import {SidebarFriendsContainer} from "./SidebarFriendsContainer";

export const SidebarFriends = () => {
    return (
        <div className={s.friends}>
            <SidebarFriendsContainer/>
        </div>
    );
};