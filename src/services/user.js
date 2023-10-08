import {http} from '@/config'

export default{
    getUserById(id){
        return http.get('/users/' + id)
    },
    getUserByEmail(email){
        return http.get('/users/' + email)
    },
    getUserById(name){
        return http.get('/users/' + name)
    },
}