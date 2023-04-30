import React, {FC} from "react";
import s from "./ProfileStatus.module.css"
import editPencil from "./img/editPencil.png"
import {UserProfileType} from "../../../redux/profile-reducer";

type ProfileStatusPropsType = {
    profile: UserProfileType
}


export const ProfileStatus: FC<ProfileStatusPropsType> = ({profile}) => {
    return (
        <div className={s.content}>
            <div className={s.content__status}>
                <h3>Status: <span>Holla, Amigo!!!</span></h3>
                {/*<h3 className={s.content__avatar__name}>{profile?.aboutMe && profile.aboutMe}</h3>*/}

                <img src={editPencil} alt="edit"/>
            </div>
        </div>
    );
};