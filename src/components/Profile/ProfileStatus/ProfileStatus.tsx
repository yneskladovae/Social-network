import React from "react";
import s from "./ProfileStatus.module.css"
import editPencil from "./img/editPencil.png"

export const ProfileStatus = () => {
    return (
        <div className={s.content}>
            <div className={s.content__status}>
                <h3>Status: <span>Holla, Amigo!!!</span></h3>
                <img src={editPencil} alt="edit"/>
            </div>
        </div>
    );
};