import React from "react";
import s from "./ProfileAvatar.module.css"
import bg from "./img/bg.png"
import avatar from "./img/avatar.png"
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileAvatar = {
    profile: any
}

export const ProfileAvatar: React.FC<ProfileAvatar> = ({profile}) => {
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
                {/*<img src={avatar} alt="img"/>*/}
                {/*<img src={profile.photos.large} alt="img"/>*/}
                {/*<h3 className={s.content__avatar__name}>Till Liberman</h3>*/}
            </div>
        </div>
    );
};