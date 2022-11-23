import axios from "axios" 

export const axiosInstance = axios.create({
    baseURL: "http://3.111.217.93/admin/"
})