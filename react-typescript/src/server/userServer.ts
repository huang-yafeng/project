import request from "./axios";

const userServe = {
    userAdd: (data: any) => {
        return request({
            url: "/api/users/register",
            method: "post",
            data
        })
    },
    userLogin: (data: any) => {
        return request({
            method: "POST",
            url: "/api/users/login",
            data
        })
    }
}

export default userServe