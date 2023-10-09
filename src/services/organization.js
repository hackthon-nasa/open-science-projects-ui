import {http} from '@/config'

export default{
    list(){
        return http.get('/organizations')
    },
    getById(id){
        return http.get('/organizations/' + id)
    },
    getByName(name){
        return http.get('/organizations/name/' + name)
    },
    getOrganizationListTagsById(id){
        return http.get('/organizations/' + id + '/tags/')
    }
}