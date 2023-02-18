import React from "react";
import s from "./Profile.module.css"
import {Posts} from "./Posts/Posts";
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";
import {ProfileName} from "./ProfileName/ProfileName";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
}

export const Profile: React.FC<ProfilePropsType> = ({profilePage}) => {
    return (
        <div className={s.content}>
            <ProfileAvatar/>
            <ProfileName/>
            <ProfileStatus/>
            <ProfileInfo/>
            <Posts postData={profilePage.postData}/>
        </div>
    );
};