import React from "react";
import s from "./Profile.module.css"
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";
import {ProfileName} from "./ProfileName/ProfileName";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./Posts/PostsContainer";
import {updateStatusTC, UserProfileType} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";

type ProfilePropsType = {
    profile: UserProfileType
    status: string
}

export const Profile: React.FC<ProfilePropsType> = ({profile, status}) => {
    return (
        <div className={s.content}>
            <ProfileAvatar profile={profile}/>
            <ProfileName profile={profile}/>
            <ProfileStatus status={status} />
            <ProfileInfo/>
            <PostsContainer/>
        </div>
    );
};