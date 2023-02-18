import {v1} from "uuid";
import u1 from "./img/u1.png"
import u2 from "./img/u2.png"
import u3 from "./img/u3.png"
import u4 from "./img/u4.png"
import u5 from "./img/u5.png"
import u6 from "./img/u6.png"


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
}
export type SidebarDataType = {
    id: string
    name: string
    src: string
}
export type ProfilePageType = {
    postData: PostType[]
}
export type DialogsPageType = {
    dialogsData: DialogsType[]
    messagesData: MessageType[]
}
export type SidebarFriendsType = {
    sidebarData: SidebarDataType[]
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebarFriends: SidebarFriendsType
}

const state: StateType = {
    profilePage: {
        postData: [
            {
                id: v1(),
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                likesCount: 3
            },
            {
                id: v1(),
                message: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                likesCount: 4
            },
            {id: v1(), message: 'Adipiscing elit, sed do eiusmod tempor incididunt.', likesCount: 3},
            {id: v1(), message: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua.', likesCount: 5},
            {
                id: v1(),
                message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                likesCount: 7
            },
        ],
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
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'Hello'},
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'Yo'},
            {id: v1(), message: 'Yo'},
        ],
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
}

export default state;