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

    setUsers  (id: string)  {
        let userId = id
        if (!userId) {
            userId = '2'
        }
        return instance.get(  `profile/` + userId)
            .then(response => {
                return response.data
            })
    },

    setAuthUserDataDAL  () {
        return instance.get(  `auth/me`)
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





