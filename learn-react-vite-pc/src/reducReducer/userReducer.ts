import userType from "@/models/user";

const params={
    data:[],
}

const userReducer=(state=params,action:any)=>{
    console.log(action,'aaa')
    switch (action.type) {
        case userType.user_query:
            return {...state.data,...action.payload};
        case userType.user_add:
            return {...state,data:action.payload};

        default:
            break;
    }
    return state;
}

export default userReducer;

