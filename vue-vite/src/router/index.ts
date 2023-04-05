import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router"

const routers: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: 'login',
        component: () => import("../pages/login.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})

export default router;