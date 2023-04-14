import React from "react";
import s from "./ProfileName.module.css"
import {UserProfileType} from "../../../redux/profile-reducer";

type ProfileNamePropsType = {
    profile: UserProfileType
}

export const ProfileName: React.FC<ProfileNamePropsType> = ({profile}) => {
    return (
        <div className={s.content}>
            <div className={s.content__avatar}>
                <h3 className={s.content__avatar__name}>{profile?.fullName && profile.fullName}</h3>
            </div>
        </div>
    );
};