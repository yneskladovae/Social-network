import {v1} from "uuid";
import u1 from "./img/u1.png"
import u2 from "./img/u2.png"
import u3 from "./img/u3.png"
import u4 from "./img/u4.png"
import u5 from "./img/u5.png"
import u6 from "./img/u6.png"
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

export type MessageType = {
    id: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
    date: string
}
export type SidebarDataType = {
    id: string
    name: string
    src: string
}
export type ProfilePageType = {
    postData: PostType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogsData: DialogsType[]
    messagesData: MessageType[]
    newMessageText: string
}
export type SidebarFriendsType = {
    sidebarData: SidebarDataType[]
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebarFriends: SidebarFriendsType
}
export type StoreType = {
    _state: StateType
    _onChange: (props: StateType) => void
    subscribe: (callback: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

export type AddPostActionType = {
    type: "ADD-POST"
}
export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type AddMessageActionType = {
    type: "ADD-MESSAGE"

}
export type UpdateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newText: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType | UpdateNewMessageTextActionType

let store: StoreType = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
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
        },
        sidebarFriends: {
            sidebarData: [
                {id: v1(), name: "Anna", src: u1},
                {id: v1(), name: "Denis", src: u2},
                {id: v1(), name: "Ihor", src: u3},
                {id: v1(), name: "Tima", src: u4},
                {id: v1(), name: "Dima", src: u5},
                {id: v1(), name: "Jhon", src: u6},
                {id: v1(), name: "Olga", src: u1},
                {id: v1(), name: "Tom", src: u2},
                {id: v1(), name: "Marek", src: u3},
                {id: v1(), name: "Khvicha", src: u4},
                {id: v1(), name: "Victor", src: u5},
                {id: v1(), name: "Petr", src: u6},
                {id: v1(), name: "Capter", src: u1},
                {id: v1(), name: "Maks", src: u2},
                {id: v1(), name: "David", src: u3},
                {id: v1(), name: "Lorenzo", src: u4},
            ]
        }
    },
    getState() {
        return this._state;
    },
    _onChange(props: StateType) {

    },
    subscribe(callback) {
        this._onChange = callback;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._onChange(this._state);
        // if (action.type === 'ADD-POST') {
        //     const newPost = {
        //         id: v1(),
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 0,
        //         date: new Date().toLocaleString() + "",
        //     }
        //     this._state = {...this._state, profilePage: {...this._state.profilePage, postData: [newPost, ...this._state.profilePage.postData]}
        //     }
        //     this._state.profilePage.newPostText = '';
        //     this._onChange(this._state);
        // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        //     this._state = {...this._state, profilePage: {...this._state.profilePage, newPostText: action.newText}};
        //     this._onChange(this._state);
        // } else if (action.type === 'ADD-MESSAGE') {
        //     const newMessage = {
        //         id: v1(),
        //         message: this._state.dialogsPage.newMessageText,
        //     }
        //     this._state = {...this._state, dialogsPage: {...this._state.dialogsPage, messagesData: [...this._state.dialogsPage.messagesData, newMessage]}
        //     }
        //     this._state.dialogsPage.newMessageText = "";
        //     this._onChange(this._state);
        // } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        //     this._state = {...this._state, dialogsPage: {...this._state.dialogsPage, newMessageText: action.newText}};
        //     this._onChange(this._state);
        // }
    }
}

export const addPostActionCreator = ():AddPostActionType => {
    return {
        type: "ADD-POST",
    }
}
export const UpdateNewPostTextActionCreator = (newText: string):UpdateNewPostTextActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText,
    }
}
export const addMessageActionCreator = ():AddMessageActionType => {
    return {
        type: "ADD-MESSAGE",
    }
}
export const UpdateNewMessageTextActionCreator = (newText: string):UpdateNewMessageTextActionType => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newText: newText,
    }
}

export default store;