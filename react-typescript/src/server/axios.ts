import request from "axios";
import { Notify } from 'react-vant';

request.create({
    baseURL: "http://localhost:3000",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    timeout: 5000,//请求超时
})

request.interceptors.response.use((response) => {
    return response.data
}, error => {
    if (error.response) {
        switch (error.response.status) {
            case 500:
                return Notify.show("接口错误500");
                break;

            default:
                break;
        }
        return Promise.reject(error.response.data)
    }
}
)

export default request;