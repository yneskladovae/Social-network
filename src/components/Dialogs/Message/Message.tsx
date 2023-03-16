import s from "../Dialogs.module.css"
import React, {ChangeEvent} from "react";
import {
    ActionsTypes,
    addMessageActionCreator,
    MessageType, updateNewMessageTextActionCreator
} from "../../../redux/store";
import {FriendMessage} from "./FriendMessage/FriendMessage";
import {MyMessage} from "./MyMessage/MyMessage";

export type MessagePropsType = {
    messagesData: MessageType[]
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

export const Message: React.FC<MessagePropsType> = ({
                                                        messagesData,
                                                        newMessageText,
                                                        dispatch,
                                                    }) => {

    const addMessageHandler = () => {
        dispatch(addMessageActionCreator());
    }

    const onChangeUpdateMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageTextActionCreator(e.currentTarget.value));
    }

    return (
        <div className={s.message}>
            <div>
                <div className={s.message}>
                    <div className={s.imageAndText}>
                        <img alt="img"
                             src="http://localhost:3000/static/media/u1.dab792ea42b6728d95a4.png"/>
                        <div className={s.text}>
                            <div className={s.name}>Ivan</div>
                            <pre className={s.messageText}>Hello, she didn’t do anything and rested all day, how are you?</pre>
                        </div>
                    </div>
                    <div className={s.time}>22:00</div>
                </div>
                <div className={s.message}>
                    <div className={s.imageAndText}>
                        <img alt="img"
                             src="http://localhost:3000/static/media/u1.dab792ea42b6728d95a4.png"/>
                        <div className={s.text}>
                            <div className={s.name}>Ivan</div>
                            <pre className={s.messageText}>Hello, she didn’t do anything and rested all day, how are you?</pre>
                        </div>
                    </div>
                    <div className={s.time}>22:00</div>
                </div>
                <FriendMessage/>
                <MyMessage messagesData={messagesData}/>
            </div>
            <div className={s.sendForm}>
                <textarea onChange={onChangeUpdateMessageHandler}
                          value={newMessageText}
                          className={s.textarea}
                          placeholder="Type your message">
                </textarea>
                <button onClick={addMessageHandler} className={s.button}>Send</button>
            </div>
        </div>
    )
}