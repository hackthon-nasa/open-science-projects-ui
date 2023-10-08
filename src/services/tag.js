import {http} from '@/config'

export default{
    getTagsByUserId(userId){
        return http.get('/tags/user/' + userId)
    },
    getTagsByOrganizationId(organizationId){
        return http.get('/tags/organization/' + organizationId)
    }
}