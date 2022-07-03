import axios from 'axios';


const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY": "d5ef88c7-5f81-4d6d-9a6c-bce28c786a15"
    }
})

export const usersAPI =  {
    getUsers (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&totalCount=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    followDAL (id:number) {
        return  instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },

    unfollowDAL (id:number)  {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }

}

export const authAPI = {
    me () {
        return instance.get(  `auth/me`)
    },
    login(email:string, password:string, rememberMe:boolean = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout () {
        return instance.delete('auth/login')
    }
}

export const profileAPI = {
    getProfile  (userId: string)  {
        return instance.get(  `profile/` + userId) },

    getStatus (userId:string) {
        return instance.get(`profile/status/` + userId) },
    updateStatus (status:string) {
        return instance.put(`profile/status`, {status:status})}
}

