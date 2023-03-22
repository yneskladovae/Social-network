import {ActionsTypes, ProfilePageType} from "./store";
import {v1} from "uuid";

const initialState = {
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
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0,
                date: new Date().toLocaleString() + "",
            }
            state = {...state, postData: [newPost, ...state.postData]}
            state.newPostText = '';
            return state;
        // break;
        case 'UPDATE-NEW-POST-TEXT':
            state = {...state, newPostText: action.payload.newText};
            return state;
        // break;
    }
    return state;
}

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
        } as const
    }
}

export default profileReducer;