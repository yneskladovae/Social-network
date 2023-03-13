import {ActionsTypes, DialogsPageType, StateType} from "./state";
import {v1} from "uuid";

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {
                id: v1(),
                message: state.newMessageText,
            }
            state = {...state, messagesData: [...state.messagesData, newMessage]}
            state.newMessageText = "";
            break;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state = {...state, newMessageText: action.newText}
            break;
    }
    return state;
}

export default dialogsReducer;