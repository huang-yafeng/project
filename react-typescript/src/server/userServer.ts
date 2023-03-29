import request from "./axios";

export const Usequery=(params:any)=>{
    return request({
        url:"http://localhost:2345/users",
        method:"GET",
        params
    })
}