import React from "react";
import s from "./ProfileAvatar.module.css"
import bg from "./img/bg.png"
import avatar from "./img/avatar.png"

export const ProfileAvatar = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.content__bgImg}
                     src={bg}
                     alt="img"/>
            </div>
            <div className={s.content__avatar}>
                <img src={avatar} alt="img"/>
                {/*<h3 className={s.content__avatar__name}>Till Liberman</h3>*/}
            </div>
        </div>
    );
};