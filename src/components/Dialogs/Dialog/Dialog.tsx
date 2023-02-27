import s from "../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsType} from "../../../redux/state";

export const Dialog: React.FC<DialogsType> = ({id, name}) => {
    let path = "/dialogs/" + id;
    return (
        <div className={s.dialog}>
            <img alt="img" src="http://localhost:3000/static/media/u1.dab792ea42b6728d95a4.png"/>
            <NavLink activeClassName={s.active} to={path}>{name}</NavLink>
        </div>
    )
}