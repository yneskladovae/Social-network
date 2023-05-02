import s from "../Dialogs.module.css"
import React, {ChangeEvent, FC} from "react";
import {FriendMessage} from "./FriendMessage/FriendMessage";
import {MyMessage} from "./MyMessage/MyMessage";
import {InitialStateType} from "../../../redux/dialogs-reducer";
import {Dialog} from "../Dialog/Dialog";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type MessagePropsType = {
    dialogsPage: InitialStateType
    addMessage: (newMessageBody: string) => void
}

type FormDataType = {
    newMessageBody: string
}

export const Message: FC<MessagePropsType> = ({dialogsPage, addMessage}) => {
    const dialogsElements = dialogsPage.dialogsData.map((dialog) => <Dialog name={dialog.name} id={dialog.id}/>)

    const addNewMessage = (formData: any) => {
        addMessage(formData.newMessageBody);
    }

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
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </>

    )
}

export const AddMessageForm: FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.sendForm}>
            <Field component={'textarea'} name={'newMessageBody'} placeholder={"Type your message"} className={s.textarea}/>
            <button className={s.button}>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)