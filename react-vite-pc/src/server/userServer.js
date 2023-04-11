import request from "./axios.js";

const userServer={
    query:(data)=>{
        return request({
            method:"POST",
            url:"/api/users/login",
            data
        })
    },
    add:(data)=>{
        return request({
            method:"POST",
            url:"/api/users/register",
            data
        })
    }
}

export default userServer;