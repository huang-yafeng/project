import axios from "axios";

axios.create({
    baseURL:"/api",
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    timeout:5000,//5秒请求超时
})

axios.interceptors.response.use((response)=>{
    return response.data
},(error)=>{
    return Promise.reject(error.response.data);
})

axios.interceptors.request.use((config)=>{
    return config;
},(error)=>{
    return Promise.reject(error)
})



export default axios;