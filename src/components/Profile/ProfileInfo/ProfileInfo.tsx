import React from "react";
import s from "./ProfileInfo.module.css"
import editPencilBlue from "./img/editPencilBlue.png";

export const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div className={s.content__info}>
                <div>
                    <h4>About me <img src={editPencilBlue} alt=""/></h4>
                    <p><span className={s.content__info__title}>First Name </span>: Camila</p>
                    <p><span className={s.content__info__title}>Country </span>: Australia</p>
                    <p><span className={s.content__info__title}>Occupation </span>: UI Designer</p>
                    <p><span className={s.content__info__title}>Birthday</span>: 13 July 1983</p>
                    <p><span className={s.content__info__title}>First Name </span>: Camila</p>
                </div>
                <div>
                    <h4>Contacts <img src={editPencilBlue} alt=""/></h4>
                    <p><span className={s.content__info__title}>First Name </span>: Camila</p>
                    <p><span className={s.content__info__title}>Country </span>: Australia</p>
                    <p><span className={s.content__info__title}>Occupation </span>: UI Designer</p>
                    <p><span className={s.content__info__title}>Birthday</span>: 13 July 1983</p>
                    <p><span className={s.content__info__title}>First Name </span>: Camila</p>
                </div>
                <div>
                    <h4>Hobby <img src={editPencilBlue} alt=""/></h4>
                    <p><span className={s.content__info__title}>First Name </span>: Camila</p>
                    <p><span className={s.content__info__title}>Country </span>: Australia</p>
                    <p><span className={s.content__info__title}>Occupation </span>: UI Designer</p>
                    <p><span className={s.content__info__title}>Birthday</span>: 13 July 1983</p>
                    <p><span className={s.content__info__title}>First Name </span>: Camila</p>
                </div>
            </div>
        </div>
    );
};