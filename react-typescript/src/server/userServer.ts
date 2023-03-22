import axios from "./axios";

export default {
    query: (params: any) => {
        return axios({
            method: "GET",
            url: "/api/login.php",
            params
        })
    },
    add: (data: any) => {
        return axios({
            method: "POST",
            url: "/api/",
            data
        })
    }
}