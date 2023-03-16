import React from "react";
import s from './Friends.module.css'
import {Friend} from "./Friend/Friend";
import {SidebarFriendsType} from "../../redux/store";

export const Friends: React.FC<SidebarFriendsType> = ({sidebarData}) => {
    return (
        <div className={s.friends}>
            <div className={s.friends__items}>
                <h2>Friends</h2>
                <div className={s.friends_container}>
                    <Friend sidebarData={sidebarData}/>
                </div>
            </div>
        </div>
    );
};