import React from "react";
import s from './Friend.module.css'
import {InitialStateType} from "../../../redux/sidebar-reducer";
// import u1 from "./img/u1.png"
// import u2 from "./img/u2.png"
// import u3 from "./img/u3.png"
// import u4 from "./img/u4.png"
// import u5 from "./img/u5.png"
// import u6 from "./img/u6.png"

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