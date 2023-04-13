import React from "react";
import s from "./ProfileAvatar.module.css"
import bg from "./img/bg.png"
import myAvatar from "./img/avatar.png"
import avatar from "../../../assets/img/avatarUndefind.png"
import {Preloader} from "../../common/Preloader/Preloader";
import {UserPhotosType, UserProfileType} from "../../../redux/profile-reducer";

type ProfileAvatar = {
    photos: UserPhotosType | undefined
}

export const ProfileAvatar: React.FC<ProfileAvatar> = ({photos}) => {
    if (!photos) {
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
                {
                    photos.large
                        ? <img src={photos.large} alt="img"/>
                        : !photos.large
                            ? <img src={avatar} alt="img"/>
                            : <img src={myAvatar} alt="img"/>
                }
                {/*<img src={myAvatar} alt="img"/>*/}
                {/*<img src={profile.photos.large} alt="img"/>*/}
                {/*<h3 className={s.content__avatar__name}>Till Liberman</h3>*/}
            </div>
        </div>
    );
};