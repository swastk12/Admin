import axios from "axios" 

export const axiosInstance = axios.create({
    baseURL: "https://adminpanel-vwkn.onrender.com/admin/"
})