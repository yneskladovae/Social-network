import s from "../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsType} from "../../../redux/store";
import user from '../../../assets/img/u2.png'
export const Dialog: React.FC<DialogsType> = ({id, name}) => {
    let path = "/dialogs/" + id;
    return (
        <div className={s.dialog}>
            <img alt="img" src={user}/>
            <NavLink activeClassName={s.active} to={path}>{name}</NavLink>
        </div>
    )
}