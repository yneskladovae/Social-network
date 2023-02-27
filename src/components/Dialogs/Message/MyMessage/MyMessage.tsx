import s from "../../Dialogs.module.css"
import React from "react";
import {MessageType} from "../../../../redux/state";

export type MyMessagePropsType = {
    messagesData: MessageType[]
}

export const MyMessage: React.FC<MyMessagePropsType> = ({messagesData}) => {
    const myMessageEl = messagesData.map((m) => {
        return (
            <div className={s.message}>
                <div key={m.id} className={s.imageAndText}>
                    <img alt="img"
                         src="http://localhost:3000/static/media/u1.dab792ea42b6728d95a4.png"/>
                    <div className={s.text}>
                        <div className={s.name}>Ivan</div>
                        <pre className={s.messageText}>{m.message}</pre>
                    </div>
                </div>
                <div className={s.time}>22:00</div>
            </div>
        )
    })
    return (
        <>
            {myMessageEl}
        </>
    )
}