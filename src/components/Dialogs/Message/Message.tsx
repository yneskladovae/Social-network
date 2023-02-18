import s from "../Dialogs.module.css"
import React from "react";
import {MessageType} from "../../../redux/state";

export const Message: React.FC<MessageType> = ({id, message}) => {
    return (
        <div key={id} className={s.message}>{message}</div>
    )
}