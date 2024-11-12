import axios,{ AxiosInstance } from "../../node_modules/axios/index";


export const instance:AxiosInstance =  axios.create({
    baseURL: "http://localhost:3000",
    
   headers:{
       "Content-Type": "application/json"}
    }
);



