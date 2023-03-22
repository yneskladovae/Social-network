import React from "react";
import {Message} from "./Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import {StoreContext} from "../../../StoreContext";
import s from "../Dialogs.module.css";
import {Dialog} from "../Dialog/Dialog";


export type MessageContainerPropsType = {
    // store: StoreType
}

export const MessageContainer: React.FC<MessageContainerPropsType> = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                const state = store.getState().dialogsPage
                const dialogsElements = state.dialogsData
                    .map((dialog) => <Dialog name={dialog.name} id={dialog.id}/>)

                const addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                const updateMessage = (newMessage: string) => {
                    store.dispatch(updateNewMessageTextActionCreator(newMessage));
                }

                return <>
                    <div className={s.dialogs__items}>
                        {dialogsElements}
                    </div>
                    <div className={s.messages}>
                        <Message
                            messagesData={state.messagesData}
                            newMessageText={state.newMessageText}
                            addMessage={addMessage}
                            updateMessage={updateMessage}
                        />
                    </div>
                </>

            }
        }
    </StoreContext.Consumer>
}