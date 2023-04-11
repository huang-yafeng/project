import request from "axios";

request.interceptors.response.use((response) => {
    if (response.status === 200) {
        return response.data
    }

    return response
}, error => {

    error.data = {};
    error.data.msg = "服务异常"
    return Promise.resolve(error);
})


export default request;