import {v1} from "uuid";

export type InitialStateType = {
    users: UsersType[]
}

export type UsersType = {
    id: number
    name: string
    status: string
    // location: LocationType
    followed: boolean
}

export type LocationType = {
    city: string
    country: string
}

const initialState: InitialStateType = {
    users: [
        // {
        //     id: v1(),
        //     fullName: 'Denis',
        //     status: 'Lorem ipsum dolor sit amet',
        //     location: {
        //         city: 'Minsk',
        //         country: 'Belarus',
        //     },
        //     isFollow: false,
        // },
        // {
        //     id: v1(),
        //     fullName: 'Stas',
        //     status: 'Mymy',
        //     location: {
        //         city: 'Gomel',
        //         country: 'Belarus',
        //     },
        //     isFollow: true,
        // },
        // {
        //     id: v1(),
        //     fullName: 'Tima',
        //     status: 'viscas el barka',
        //     location: {
        //         city: 'barcelona',
        //         country: 'Belarus',
        //     },
        //     isFollow: false,
        // },
        // {
        //     id: v1(),
        //     fullName: 'Anna',
        //     status: 'mew mew',
        //     location: {
        //         city: 'Gomel',
        //         country: 'Belarus',
        //     },
        //     isFollow: false,
        // },
        // {
        //     id: v1(),
        //     fullName: 'Crish',
        //     status: 'Siiiiiiiiiiiii',
        //     location: {
        //         city: 'Minsk',
        //         country: 'Belarus',
        //     },
        //     isFollow: true,
        // },
    ] as UsersType[]
}

export type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)
            }
        }
        case "SET_USERS": {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

// export const followAC = (userId: string) => {
//     return {
//         type: "FOLLOW",
//         payload: {
//             userId
//         } as const
//     }
// }
//
// export const unfollowAC = (userId: string) => {
//     return {
//         type: "UNFOLLOW",
//         payload: {
//             userId
//         } as const
//     }
// }

// export const setUsersAC = (users: InitialStateType) => {
//     return {
//         type: "SET-USERS",
//         payload: {
//             users
//         } as const
//     }
// }
export const followAC = (userId: number) => ({type: "FOLLOW", userId}) as const
export const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId}) as const
export const setUsersAC = (users: UsersType[]) => ({type: "SET_USERS", users}) as const


export default usersReducer;