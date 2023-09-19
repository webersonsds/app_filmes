import axios from 'axios'
//  baseURL: 'https://api.themoviedb.org/3/',

// adde489c365dc208879b95123c41e823

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api