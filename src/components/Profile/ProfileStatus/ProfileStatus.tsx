import React, {ChangeEvent, FC, useState, KeyboardEvent} from "react";
import s from "./ProfileStatus.module.css"
import editPencil from "./img/editPencil.png"
import {UserProfileType} from "../../../redux/profile-reducer";

type ProfileStatusPropsType = {}

export const ProfileStatus: FC<ProfileStatusPropsType> = () => {
    const [status, setStatus] = useState("Holla, Amigo!!!");
    const [editMode, setEditMode] = useState(false);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setEditMode(false);
        }
    }

    const editModeHandler = () => {
        setEditMode(!editMode);
    }

    return (
        <div className={s.content}>
            <div className={s.content__status}>
                {editMode
                    ? <>
                        <h3>Status:</h3>
                        <input
                            type="text"
                            value={status}
                            onChange={onChangeHandler}
                            onKeyPress={onKeyPressHandler}
                            onBlur={editModeHandler}
                            autoFocus
                        />
                        <img onClick={editModeHandler} src={editPencil} alt="edit"/>
                    </>
                    :
                    <>
                        <h3>Status: <span onDoubleClick={editModeHandler}>{status}</span></h3>
                        <img onClick={editModeHandler} src={editPencil} alt="edit"/>
                    </>
                }
            </div>
        </div>
        // <div className={s.content}>
        //     <div className={s.content__status}>
        //         <h3>Status: <span>{profile?.aboutMe ? profile.aboutMe : 'Holla, Amigo!!!'}</span></h3>
        //         <img src={editPencil} alt="edit"/>
        //     </div>
        // </div>
    );
};