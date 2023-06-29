import s from "../../Dialogs.module.css"
import React from "react";
import myMessage from '../../../../assets/img/u4.png'
import userMessage from '../../../../assets/img/u5.png'
export const FriendMessage = () => {
    return (
        <>
            <div className={s.message}>
                <div className={s.imageAndText}>
                    <img alt="img"
                         src={myMessage}
                    />
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
                         src={myMessage}
                    />
                    <div className={s.text}>
                        <div className={s.name}>Ivan</div>
                        <pre className={s.messageText}>Hello, she didn’t do anything and rested all day, how are you?</pre>
                    </div>
                </div>
                <div className={s.time}>22:00</div>
            </div>
            <div className={s.friendMessage}>
                <div className={s.friendImageAndText}>
                    <img alt="img" src={userMessage}/>
                    <div className={s.friendText}>
                        <div className={s.friendName}>Denis</div>
                        <pre className={s.friendMessageText}>Hello, how are you, what did you do yesterday?</pre>
                    </div>
                </div>
                <div className={s.friendTime}>22:00</div>
            </div>
            <div className={s.friendMessage}>
                <div className={s.friendImageAndText}>
                    <img alt="img" src={userMessage}/>
                    <div className={s.friendText}>
                        <div className={s.friendName}>Denis</div>
                        <pre className={s.friendMessageText}>Hello, how are you, what did you do yesterday?</pre>
                    </div>
                </div>
                <div className={s.friendTime}>22:00</div>
            </div>
        </>
    )
}