import {createRouter,createWebHashHistory,RouteRecordRaw} from "vue-router"

const routers:Array<RouteRecordRaw>=[
    {
        path:"/",
        name:"login",
        component:()=>import("@/pages/Login.vue")
    }
]

const router=createRouter({
    history:createWebHashHistory(),
    routes:routers,
})

export default router;