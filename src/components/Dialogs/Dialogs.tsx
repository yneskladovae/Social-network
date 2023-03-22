import s from "./Dialogs.module.css"
import React from "react";
import {MessageContainer} from "./Message/MessageContainer";

export type DialogsPropsType = {
    // store: StoreType
}

export const Dialogs: React.FC<DialogsPropsType> = () => {
    // const state = store.getState().dialogsPage
    // const dialogsElements = state.dialogsData
    //     .map((dialog) => <Dialog name={dialog.name} id={dialog.id}/>)

    return (
        // {/*<div className={s.dialogs__items}>*/}
        // {/*    {dialogsElements}*/}
        // {/*</div>*/}
        <div className={s.dialogs}>
                <MessageContainer/>
        </div>
    )
}