import {v1} from "uuid";

export type InitialStateType = {
    postData: PostType[]
    newPostText: string
    profile: any
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
    newPostText: '',
    profile: null
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0,
                date: new Date().toLocaleString() + "",
            }
            state = {...state, postData: [newPost, ...state.postData]}
            state.newPostText = '';
            return state;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            state = {...state, newPostText: action.payload.newText};
            return state;
        }
        case 'SET-USER-PROFILE': {
            state = {...state, profile: action.payload.profile};
            return state;
        }

    }
    return state;
}

export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>

export const addPostActionCreator = () => {
    return {
        type: "ADD-POST",
    } as const
}

export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        payload: {
            newText
        }
    } as const
}

export const setUserProfile = (profile: any) => {
    return {
        type: "SET-USER-PROFILE",
        payload: {
            profile
        }
    } as const
}

export default profileReducer;