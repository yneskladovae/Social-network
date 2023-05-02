import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {setAuthUserData} from "./auth-reducer";

export type InitialStateType = {
    postData: PostType[]
    profile: UserProfileType
    status: string
}

export type PostType = {
    id: string
    message: string
    likesCount: number
    date: string
}

export type UserProfileType = null | {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string,
    },
    lookingForAJob: boolean,
    lookingForADescription: string,
    fullName: string,
    userId: number,
    photos: UserPhotosType,
}

export type UserPhotosType = {
    large: string | undefined,
    small: string | undefined,
}

const initialState: InitialStateType = {
    postData: [
        {
            id: v1(),
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            likesCount: 3,
            date: "14:15 04.02.2023",
        },
        {
            id: v1(),
            message: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            likesCount: 4,
            date: "16:24 03.02.2023",
        },
        {
            id: v1(),
            message: 'Adipiscing elit, sed do eiusmod tempor incididunt.',
            likesCount: 3,
            date: "10:17 31.01.2023"
        },
        {
            id: v1(),
            message: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            likesCount: 5,
            date: "17:18 27.01.2023"
        },
        {
            id: v1(),
            message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            likesCount: 7,
            date: "14:15 25.01.2023"
        },
    ],
    profile: null,
    status: ''
}
const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
             const newPost = {
                id: v1(),
                message: action.payload.newPostText,
                likesCount: 0,
                date: new Date().toLocaleString() + "",
            }
            return state = {...state, postData: [newPost, ...state.postData]}
        }
        case 'SET-USER-PROFILE': {
            state = {...state, profile: action.payload.profile};
            return state;
        }
        case 'SET-STATUS': {
            return {...state, status: action.payload.status};
        }
    }
    return state;
}

export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusAC>

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD-POST",
        payload: {
            newPostText
        }
    } as const
}

export const setUserProfile = (profile: UserProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        payload: {
            profile
        }
    } as const
}

export const setStatusAC = (status: string) => {
    return {
        type: "SET-STATUS",
        payload: {
            status
        }
    } as const
}

export const getUserProfile = (currUserId: string | 28468) => {
    return (dispatch: Dispatch) => {
        usersAPI.getUserProfile(currUserId)
            .then((data) => {
                dispatch(setUserProfile(data));
            });
    }
}

export const getStatusTC = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then((response) => {
            dispatch(setStatusAC(response.data));
        });
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then((response) => {
            if (response.data.resultCode === 1) {
                dispatch(setStatusAC(status));
            }
        });
}

export default profileReducer;