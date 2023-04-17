import request from "axios";

request.create({
    baseURL:"",
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    timeout:5000,//5秒请求超时
})

request.interceptors.request.use((config)=>{
    //请求前做什么
    return config
},(error)=>{
    return Promise.reject(error);
})

request.interceptors.response.use((response)=>{
    return response.data;
},(error)=>{
    return Promise.reject(error.response.data);
})

export default request;