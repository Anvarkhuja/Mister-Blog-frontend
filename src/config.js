import axios from "axios"

export const axiosInstance = axios.create({
 baseURL : "https://mister-blog-backend.vercel.app/api",
 
})
