import {ActionsTypes, ProfilePageType, StateType} from "./state";
import {v1} from "uuid";


const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
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
            break;
        case 'UPDATE-NEW-POST-TEXT':
            state = {...state, newPostText: action.newText};
            break;
    }
    return state;
}

export default profileReducer;