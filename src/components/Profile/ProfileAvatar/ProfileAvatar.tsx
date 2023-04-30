import React from "react";
import s from "./ProfileAvatar.module.css"
import bg from "./img/bg.png"
import myAvatar from "./img/avatar.png"
import avatar from "../../../assets/img/avatarUndefind.png"
import {Preloader} from "../../common/Preloader/Preloader";
import {UserProfileType} from "../../../redux/profile-reducer";

type ProfileAvatar = {
    profile: UserProfileType
}

export const ProfileAvatar: React.FC<ProfileAvatar> = ({profile}) => {
    console.log(profile)
    console.log(profile?.photos.large)
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.content}>
            <div>
                <img className={s.content__bgImg}
                     src={bg}
                     alt="img"/>
            </div>
            <div className={s.content__avatar}>
                {profile.photos.large ? <img src={profile.photos.large} alt="img"/> : <img src={avatar} alt="img"/>}
                {/*<img src={myAvatar} alt="img"/>*/}
                {/*<img src={profile.photos.large} alt="img"/>*/}
                {/*<h3 className={s.content__avatar__name}>Till Liberman</h3>*/}
            </div>
        </div>
    );
};