import React from "react";
import s from "./ProfileName.module.css"

type ProfileNamePropsType = {
    fullName: string | undefined
}

export const ProfileName: React.FC<ProfileNamePropsType> = ({fullName}) => {
    return (
        <div className={s.content}>
            <div className={s.content__avatar}>
                <h3 className={s.content__avatar__name}>{fullName ? fullName : 'Denis Polunosik'}</h3>
            </div>
        </div>
    );
};