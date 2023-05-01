import React, {ChangeEvent, FC, useState, KeyboardEvent} from "react";
import s from "./ProfileStatus.module.css"
import editPencil from "./img/editPencil.png"
import {updateStatusTC, UserProfileType} from "../../../redux/profile-reducer";
import {useDispatch} from "react-redux";

type ProfileStatusPropsType = {
    status: string
}

export const ProfileStatus: FC<ProfileStatusPropsType> = ({status}) => {
    const dispatch = useDispatch()
    const [userStatus, setUserStatus] = useState(status);
    const [editMode, setEditMode] = useState(false);
    
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserStatus(e.currentTarget.value);
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setEditMode(false);
        }
    }

    const onBlurHandler = () => {
        setEditMode(false);
        dispatch(updateStatusTC(userStatus))
    }

    const onDoubleClickHandler = () => {
        setEditMode(true);
    }

    return (
        <div className={s.content}>
            <div className={s.content__status}>
                {editMode
                    ? <>
                        <h3>Status:</h3>
                        <input
                            type="text"
                            value={userStatus}
                            onChange={onChangeHandler}
                            onKeyPress={onKeyPressHandler}
                            onBlur={onBlurHandler}
                            autoFocus
                        />
                        <img onClick={onBlurHandler} src={editPencil} alt="edit"/>
                    </>
                    :
                    <>
                        <h3>Status: <span onDoubleClick={onDoubleClickHandler}>{userStatus}</span></h3>
                        <img onClick={onDoubleClickHandler} src={editPencil} alt="edit"/>
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