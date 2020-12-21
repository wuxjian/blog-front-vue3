import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import {title} from "@/model/model";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'IndexLayout',
    component: () => import('@/views/index/IndexLayout.vue'),
    children: [
      {
        path: '',
        name: 'IndexArticleList',
        component: () => import('@/views/index/components/IndexArticleList.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: 'page/:page',
        name: 'IndexPage',
        component: () => import('@/views/index/components/IndexArticleList.vue'),
        meta: {
          title: '首页'
        }
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

router.beforeEach((to, from, next) => {
  if (to.meta['title']) {
    document.title = to.meta['title'] + ' - ' + title
  }
  next()
})

export default router
