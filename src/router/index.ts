import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'IndexLayout',
    component: () => import('@/views/index/IndexLayout.vue'),
    children: [
      {
        path: '',
        name: 'IndexArticleList',
        component: () => import('@/views/index/components/IndexArticleList.vue')
      },
      {
        path: 'page/:page',
        name: 'IndexPage',
        component: () => import('@/views/index/components/IndexArticleList.vue')
      },
      {
        path: 'article/:id',
        name: 'IndexArticleDetail',
        component: () => import('@/views/index/components/IndexArticleDetail.vue')
      },
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/404.vue')
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: '/404' },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
