import s from "../Dialogs.module.css"
import React, {ChangeEvent} from "react";
import {FriendMessage} from "./FriendMessage/FriendMessage";
import {MyMessage} from "./MyMessage/MyMessage";
import {InitialStateType} from "../../../redux/dialogs-reducer";
import {Dialog} from "../Dialog/Dialog";

export type MessagePropsType = {
    dialogsPage: InitialStateType
    addMessage: () => void
    updateMessage: (newMessage: string) => void
}

export const Message: React.FC<MessagePropsType> = ({dialogsPage, updateMessage, addMessage}) => {

    const addMessageHandler = () => {
        addMessage();
    }

    const onChangeUpdateMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateMessage(e.currentTarget.value);
    }
    const dialogsElements = dialogsPage.dialogsData.map((dialog) => <Dialog name={dialog.name} id={dialog.id}/>)

    return (
        <>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={s.message}>
                <div>
                    <>
                        {/*<div className={s.message}>*/}
                        {/*    <div className={s.imageAndText}>*/}
                        {/*        <img alt="img"*/}
                        {/*             src="http://localhost:3000/static/media/u1.dab792ea42b6728d95a4.png"/>*/}
                        {/*        <div className={s.text}>*/}
                        {/*            <div className={s.name}>Ivan</div>*/}
                        {/*            <pre className={s.messageText}>Hello, she didn’t do anything and rested all day, how are you?</pre>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className={s.time}>22:00</div>*/}
                        {/*</div>*/}
                        {/*<div className={s.message}>*/}
                        {/*    <div className={s.imageAndText}>*/}
                        {/*        <img alt="img"*/}
                        {/*             src="http://localhost:3000/static/media/u1.dab792ea42b6728d95a4.png"/>*/}
                        {/*        <div className={s.text}>*/}
                        {/*            <div className={s.name}>Ivan</div>*/}
                        {/*            <pre className={s.messageText}>Hello, she didn’t do anything and rested all day, how are you?</pre>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className={s.time}>22:00</div>*/}
                        {/*</div>*/}
                    </>
                    <FriendMessage/>
                    <MyMessage messagesData={dialogsPage.messagesData}/>
                </div>
                <div className={s.sendForm}>
                <textarea onChange={onChangeUpdateMessageHandler}
                          value={dialogsPage.newMessageText}
                          className={s.textarea}
                          placeholder="Type your message">
                </textarea>
                    <button onClick={addMessageHandler} className={s.button}>Send</button>
                </div>
            </div>
        </>

    )
}