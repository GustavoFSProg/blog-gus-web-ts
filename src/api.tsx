import axios from 'axios'

const api = axios.create({
    baseURL:"https://blog-gus-api.vercel.app/"
})

export default api