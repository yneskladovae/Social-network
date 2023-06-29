import React from "react";
import s from './Friend.module.css'
import {InitialStateType} from "../../../redux/sidebar-reducer";

type FriendsPropsType = {
    sidebarFriends: InitialStateType
}

export const Friends: React.FC<FriendsPropsType> = ({sidebarFriends}) => {
    const friendsElements = sidebarFriends.sidebarData.map((el) =>
        <div key={el.id} className={s.friend}>
            <img src={el.src} alt="img"/>
            <span>{el.name}</span>
        </div>
    )
    return (
        <>
            {friendsElements}
        </>
    );
};