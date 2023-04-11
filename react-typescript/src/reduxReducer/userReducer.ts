import userType from "../models/userType";

const params = {}

const userReducer = (state = params, action: any) => {
    switch (action.type) {
        case userType.user_query:
            return { ...state, ...action.payload }
        case userType.user_add:
            return { ...state, ...action.payload }
            
        default:
            break;
    }
    return state
}

export default userReducer

