import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://localhost:6001/',
    headers: {
        'Authorization': {
            toString() {
                return `Bearer ${localStorage.getItem('token')}`
            }
        }
    }
})