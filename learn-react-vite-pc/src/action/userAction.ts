import userType from "@/models/user";

const userAction={
    query:(params:any)=>{
        return {
            type:userType.user_query,
            payload:params
        }
    },
    add:(params:any)=>{
        return {
            type:userType.user_add,
            payload:params
        }
    },
    del:(params:any)=>{
        return {
            type:userType.user_del,
            payload:params
        }
    },
    put:(params:any)=>{
        return {
            type:userType.user_put,
            payload:params
        }
    },
}

export default userAction;