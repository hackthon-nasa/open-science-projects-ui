import {http} from '@/config'

export default{
    getTagsByUserId(userId){
        return http.get('/users/' + userId + '/tags/')
    },
    getTagsByOrganizationId(organizationId){
        return http.get('/tags/organization/' + organizationId)
    }
}