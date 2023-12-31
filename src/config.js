import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://nasa-hackathon-os-cervejeiros.somee.com/api/',
    headers: {
        'Authorization': {
            toString() {
                return `Bearer ${localStorage.getItem('token')}`
            }
        }
    }
})
