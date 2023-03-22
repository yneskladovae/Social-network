import React from "react";
import {StoreContext} from "../../StoreContext";
import s from './Friends.module.css'
import {Friends} from "./Friends/Friends";
import {SidebarFriendsType} from "../../redux/store";

export const SidebarFriendsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                const state: SidebarFriendsType = store.getState().sidebarFriends
                return (
                    <div className={s.friends__items}>
                        <h2>Friends</h2>
                        <div className={s.friends_container}>
                            <Friends state={state}/>
                        </div>
                    </div>
                )
            }
        }
    </StoreContext.Consumer>
}


