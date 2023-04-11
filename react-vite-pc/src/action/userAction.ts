import userType from "../models/userType";


const query = (params: any) => {
    return {
        type: userType.user_query,
        payload: params
    }
}
const add = (params: any) => {
    return {
        type: userType.user_add,
        payload: params
    }
}


export { add, query }