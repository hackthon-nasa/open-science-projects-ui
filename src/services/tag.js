import {http} from '@/config'

export default{
    getTagsByUserId(userId){
        return http.get('/users/' + userId + '/tags/')
    },
}