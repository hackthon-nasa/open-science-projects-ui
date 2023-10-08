import {http} from '@/config'

export default{
    getListFiltered(tags){
        return http.get('/projects', tags)
    },
    getById(id){
        return http.get('/projects/' + id)
    },
    getByName(name){
        return http.get('/projects/' + name)
    },
    create(project){
        return http.post('/projects', project)
    },
}