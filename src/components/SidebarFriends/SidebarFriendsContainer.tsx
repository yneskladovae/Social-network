import React from "react";
import s from './Friends.module.css'
import {Friends} from "./Friends/Friends";
import {connect} from "react-redux";
import { InitialStateType } from "../../redux/sidebar-reducer";

export type MapStateToPropsType = {
    sidebarFriends: InitialStateType
}

export type MapDispatchToPropsType = {

}


// export const SidebarFriendsContainer = () => {
//     return <StoreContext.Consumer>
//         {
//             (store) => {
//                 const state: SidebarFriendsType = store.getState().sidebarFriends
//                 return (
//                     <div className={s.friends__items}>
//                         <h2>Friends</h2>
//                         <div className={s.friends_container}>
//                             <Friends state={state}/>
//                         </div>
//                     </div>
//                 )
//             }
//         }
//     </StoreContext.Consumer>
// }
//

const mapStateToProps = (state:MapStateToPropsType) => {
    return {
        sidebarFriends: state.sidebarFriends
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
    }
}

export const SidebarFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);