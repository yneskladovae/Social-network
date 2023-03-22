import {v1} from "uuid";

export type DialogsType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

export type InitialStateType = {
    dialogsData: DialogsType[]
    messagesData: MessageType[]
    newMessageText: string
}

const initialState: InitialStateType  = {
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

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {
                id: v1(),
                message: state.newMessageText,
            }
            state = {...state, messagesData: [...state.messagesData, newMessage]}
            state.newMessageText = "";
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state = {...state, newMessageText: action.payload.newText}
            return state;
    }
    return state;
}

export type ActionsTypes = ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageTextActionCreator>

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