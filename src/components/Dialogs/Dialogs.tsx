import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {StoreType} from "../../redux/store";
import React from "react";
import {MessageContainer} from "./Message/MessageContainer";

export type DialogsPropsType = {
    store: StoreType
}

export const Dialogs: React.FC<DialogsPropsType> = ({store}) => {
    const state = store.getState().dialogsPage
    const dialogsElements = state.dialogsData
        .map((dialog) => <Dialog name={dialog.name} id={dialog.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <MessageContainer store={store}/>
            </div>
        </div>
    )
}