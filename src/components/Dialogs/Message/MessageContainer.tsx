import React from "react";
import {addMessageActionCreator, StoreType, updateNewMessageTextActionCreator} from "../../../redux/store";
import {Message} from "./Message";


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