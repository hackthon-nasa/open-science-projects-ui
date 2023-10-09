import {http} from '@/config'

export default{
    getListFiltered(tags){
        let query = tags.map(t => "TagIds=" + t).join('&');
        return http.get('/projects?' + query);
    },
    getProjectByOrganizationId(organizationId){
        return http.get('/projects/organization/' + organizationId);
    },
    getTagsByProjectId(projectId){
        return http.get('projects/tags/' + projectId)
    },
    getById(id){
        return http.get('/projects/' + id);
    },
    getByName(name){
        return http.get('/projects/' + name);
    },
    create(project){
        return http.post('/projects', project);
    },
}