import {v1} from "uuid";
import u1 from "./img/u1.png";
import u2 from "./img/u2.png";
import u3 from "./img/u3.png";
import u4 from "./img/u4.png";
import u5 from "./img/u5.png";
import u6 from "./img/u6.png";

export type InitialStateType = {
    sidebarData: SidebarDataType[]
}

export type SidebarDataType = {
    id: string
    name: string
    src: string
}

const initialState: InitialStateType = {
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

const sidebarReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FRIENDS-SIDEBAR':
            return state;
    }
    return state;
}

export type ActionsTypes = ReturnType<typeof sidebarActionCreator>

export const sidebarActionCreator = () => {
    return {
        type: "FRIENDS-SIDEBAR"
    } as const
}

export default sidebarReducer;

