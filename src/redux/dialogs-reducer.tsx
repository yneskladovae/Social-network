import {ActionsTypes, DialogsPageType} from "./store";
import {v1} from "uuid";

const initialState = {
    dialogsData: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Anna'},
        {id: v1(), name: 'Ighor'},
        {id: v1(), name: 'Tima'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Stas'},
    ],
    messagesData: [
        {id: v1(), message: 'Hello, she didn’t do anything and rested all day, how are you?'},
    ],
    newMessageText: '',
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
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
            state = {...state, newMessageText: action.payload.newText}
            break;
    }
    return state;
}

export const addMessageActionCreator = () => {
    return {
        type: "ADD-MESSAGE",
    } as const
}
export const updateNewMessageTextActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        payload: {
            newText
        }
    } as const
}

export default dialogsReducer;