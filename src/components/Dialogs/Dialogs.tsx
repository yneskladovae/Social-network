import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/store";
import React from "react";

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, dispatch}) => {
    const dialogsElements = dialogsPage.dialogsData
        .map((dialog) => <Dialog name={dialog.name} id={dialog.id}/>)
    // const messagesElements = dialogsPage.messagesData
    //     .map((message) => <Message message={message.message} id={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {/*{messagesElements}*/}
                <Message
                    messagesData={dialogsPage.messagesData}
                    newMessageText={dialogsPage.newMessageText}
                    dispatch={dispatch}
                />
            </div>
        </div>
    )
}