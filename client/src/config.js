import axios from "axios" 

export const axiosInstance = axios.create({
    baseURL: "http://13.233.92.77/admin/"
})