import {createStore} from "vuex"

const store=createStore({
    state:{
        num:100,
    },
    getters:{},
    mutations:{
        add(state,action){
            state.num=state.num+action;
        }
    },
    actions:{},
    modules:{}
})

export default store;