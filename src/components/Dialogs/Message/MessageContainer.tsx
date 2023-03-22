import React from "react";
import {StoreType} from "../../../redux/store";
import {Message} from "./Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";


export type MessageContainerPropsType = {
    store: StoreType
}

export const MessageContainer: React.FC<MessageContainerPropsType> = ({store}) => {
    const state = store.getState().dialogsPage

    const addMessage = () => {
        store.dispatch(addMessageActionCreator());
    }

    const updateMessage = (newMessage: string) => {
        store.dispatch(updateNewMessageTextActionCreator(newMessage));
    }

    return (
        <Message
            messagesData={state.messagesData}
            newMessageText={state.newMessageText}
            addMessage={addMessage}
            updateMessage={updateMessage}
        />
    )

}