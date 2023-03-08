import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";
import React from "react";

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage:() => void
    updateNewMessageText:(newText: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, addMessage, updateNewMessageText}) => {
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
                    addMessage={addMessage}
                    newMessageText={dialogsPage.newMessageText}
                    updateNewMessageText={updateNewMessageText}
                />
            </div>
        </div>
    )
}