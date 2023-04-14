import React from "react";
import s from "./Profile.module.css"
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";
import {ProfileName} from "./ProfileName/ProfileName";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./Posts/PostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: UserProfileType
}

export const Profile: React.FC<ProfilePropsType> = ({profile}) => {
    return (
        <div className={s.content}>
            <ProfileAvatar profile={profile}/>
            <ProfileName profile={profile}/>
            <ProfileStatus/>
            <ProfileInfo/>
            <PostsContainer/>
        </div>
    );
};