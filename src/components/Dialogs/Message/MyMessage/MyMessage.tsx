import s from "../../Dialogs.module.css"
import React from "react";
import {MessageType} from "../../../../redux/store";
import myMessage from '../../../../assets/img/u4.png'

export type MyMessagePropsType = {
    messagesData: MessageType[]
}

export const MyMessage: React.FC<MyMessagePropsType> = ({messagesData}) => {
    const myMessageEl = messagesData.map((m) => {
        return (
            <div className={s.message}>
                <div key={m.id} className={s.imageAndText}>
                    <img alt="img"
                         src={myMessage}/>
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