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
}

const initialState: InitialStateType = {
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
}

const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {
                id: v1(),
                message: action.payload.newMessageBody,
            }
            return state = {...state, messagesData: [...state.messagesData, newMessage]}
    }
    return state;
}

export type DialogsActionsType = ReturnType<typeof addMessageActionCreator>

export const addMessageActionCreator = (newMessageBody: string) => {
    return {
        type: "ADD-MESSAGE",
        payload: {
            newMessageBody
        }
    } as const
}

export default dialogsReducer;