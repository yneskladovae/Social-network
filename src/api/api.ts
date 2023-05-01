import axios from "axios";

// Data access layer
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': '3e0c4b7e-0bea-4155-a31d-3500dd1e1abc'
    },
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
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
    getUserProfile(currUserId: string | 28468) {
        console.log('Obsolate method. Please use profileAPI obj')
        return profileAPI.getUserProfile(currUserId)
    },
}

export const profileAPI = {
    getUserProfile(currUserId: string | 28468) {
        return instance.get(`/profile/${currUserId}`)
            .then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get(`/profile//status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`/profile//status`, {status: status})
    },
}

export const authAPI = {
    isAuthMe() {
        return instance.get(`/auth/me`)
            .then(response => response.data)
    },
}