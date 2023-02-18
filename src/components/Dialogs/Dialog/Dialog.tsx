import s from "../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsType} from "../../../redux/state";

export const Dialog: React.FC<DialogsType> = ({id, name}) => {
    let path = "/dialogs/" + id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}