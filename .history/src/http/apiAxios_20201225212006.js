import axios from 'axios'
const axiosIns = axios.create({
    baseURL:"/api",
    timeout:8000
})