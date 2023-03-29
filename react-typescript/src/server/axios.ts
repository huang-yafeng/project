import axios from "axios";
import { Notify } from 'react-vant';

const request = axios.create({
    baseURL: "http://localhost",
    timeout: 5000,//
})

request.interceptors.request.use(function (config) {
    //发送请求之前干啥
    return config;
}, function (error) {

    //对错误的请求做啥
    return error;
})

request.interceptors.response.use(function (response) {
    switch (response.status) {
        case 200:
            return response.data
        case 500:
            return Notify.show('接口500报错');

        default:
            break;
    }
    return response;
}, function (error) {
    //对响应错误做点什么
    return Promise.reject(error)
})

export default request;