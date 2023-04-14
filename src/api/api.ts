import axios from "axios";

// Data access  layer
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3e0c4b7e-0bea-4155-a31d-3500dd1e1abc'
    },
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    isAuth() {
        return instance.get(`/auth/me`)
            .then(response => response.data)
    },
    setFollow(userId: number) {
        return instance.post(`/follow/${userId}`)
            .then(response => response.data)
    },
    setUnfollow(userId: number) {
        return instance.delete(`/follow/${userId}`)
            .then(response => response.data)
    },
}

// export const getUsers = (currentPage: number, pageSize: number) => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
//         {withCredentials: true})
//         .then(response => response.data)
// }
