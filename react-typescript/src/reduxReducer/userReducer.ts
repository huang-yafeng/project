import userType from "../models/userType";

const params = {
    name: "admin",
    dataList: []
}

const userReducer = (state = params, action: any) => {
    switch (action.type) {
        case userType.user_query:
            return { ...state, ...action.payload }
        case userType.user_add:
            return { ...state, ...action.payload }

            break;

        default:
            break;
    }
    return state
}

export default userReducer

