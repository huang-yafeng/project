import axios from "@/util/axios";
const userServe={
    query:(data:Object)=>{
        return axios({
            method:"POST",
            url:"/api/users/login",
            data
        })
    }
}

export default userServe;