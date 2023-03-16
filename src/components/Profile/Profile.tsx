import React from "react";
import s from "./Profile.module.css"
import {Posts} from "./Posts/Posts";
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";
import {ProfileName} from "./ProfileName/ProfileName";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<ProfilePropsType> = ({profilePage, dispatch}) => {
    return (
        <div className={s.content}>
            <ProfileAvatar/>
            <ProfileName/>
            <ProfileStatus/>
            <ProfileInfo/>
            <Posts postData={profilePage.postData} newPostText={profilePage.newPostText} dispatch={dispatch}/>
        </div>
    );
};