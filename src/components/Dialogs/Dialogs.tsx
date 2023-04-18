import s from "./Dialogs.module.css"
import React from "react";
import {MessageContainer} from "./Message/MessageContainer";
import {Redirect} from "react-router-dom";

export type DialogsPropsType = {
    isAuth: boolean
}

export const Dialogs: React.FC<DialogsPropsType> = ({isAuth}) => {
    if (!isAuth) return <Redirect to={"/login"}/>
    return (
        <div className={s.dialogs}>
            <MessageContainer/>
        </div>
    )
}