import React from "react";
import s from "./ProfileName.module.css"

export const ProfileName = () => {
    return (
        <div className={s.content}>
            <div className={s.content__avatar}>
                <h3 className={s.content__avatar__name}>Till Liberman</h3>
            </div>
        </div>
    );
};