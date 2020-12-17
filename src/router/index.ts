import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import IndexLayout from "@/views/index/IndexLayout.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'IndexLayout',
        component: IndexLayout
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
