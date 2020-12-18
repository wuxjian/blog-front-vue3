import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import IndexLayout from "@/views/index/IndexLayout.vue";
import IndexArticleList from "@/views/index/components/IndexArticleList.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'IndexLayout',
        component: IndexLayout,
        children: [
            {
                path: '',
                name: 'IndexArticleList',
                component: IndexArticleList,
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
