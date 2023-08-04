import axios from "axios"



let axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com/'
})



const getUsersAxios = () => {
    return axiosInstance.get('v3/launches')
}



export { getUsersAxios }