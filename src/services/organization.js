import {http} from '@/config'

export default{
    list(){
        return http.get('/organization')
    },
    getById(id){
        return http.get('/organization/' + id)
    },
    getByName(name){
        return http.get('/organization/name/' + name)
    }
}