import s from "../../Dialogs.module.css"
import React from "react";

export const FriendMessage = () => {
    return (
        <>
            <div className={s.friendMessage}>
                <div className={s.friendImageAndText}>
                    <img alt="img" src="http://localhost:3000/static/media/u3.323fe667637d7f2ed107.png"/>
                    <div className={s.friendText}>
                        <div className={s.friendName}>Denis</div>
                        <pre className={s.friendMessageText}>Hello, how are you, what did you do yesterday?</pre>
                    </div>
                </div>
                <div className={s.friendTime}>22:00</div>
            </div>
            <div className={s.friendMessage}>
                <div className={s.friendImageAndText}>
                    <img alt="img" src="http://localhost:3000/static/media/u3.323fe667637d7f2ed107.png"/>
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