import request from "./axios";

const userServe = {
    add: (data: any) => {
        return request({
            url: "/api/users/register",
            method: "post",
            data
        })
    },
    query: (data: any) => {
        return request({
            method: "POST",
            url: "/api/users/login",
            data
        })
    },
}

export default userServe