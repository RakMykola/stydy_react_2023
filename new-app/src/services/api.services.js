import axios from "axios"



let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})



const getUsersAxios = () => {
    return axiosInstance.get()
}

const getUsersPosts = () => {
    return axiosInstance.get('/posts')
}


export { getUsersAxios, getUsersPosts }