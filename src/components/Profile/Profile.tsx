import React from "react";
import s from "./Profile.module.css"
import {Posts} from "./Posts/Posts";
import bg from "./src/bg.png"
import avatar from "./src/avatar.png"
import editPencil from "./src/editPencil.png"
import editPencilBlue from "./src/editPencilBlue.png"

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.content__bgImg}
                    src={bg}
                    alt="img"/>
                {/*<div className={s.content__bgImg__btn}>*/}
                {/*    <button className={s.content__btn}>Change BgPhoto</button>*/}
                {/*</div>*/}
            </div>
            <div className={s.content__avatar}>
                <img src={avatar} alt="img"/>
                {/*<div className={s.content__avatar__btn}>*/}
                {/*    <button>Change photo</button>*/}
                {/*</div>*/}
                <h3 className={s.content__avatar__name}>Till Liberman</h3>
            </div>

            <div className={s.content__status}>
                <h3>Status: <span>Holla, Amigo!!!</span></h3>
                <img src={editPencil} alt="edit"/>
            </div>

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
                    {/*<button>Edit</button>*/}
                </div>
            </div>
            <Posts />
        </div>
    );
};