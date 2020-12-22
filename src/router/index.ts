import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import {title} from "@/model/model";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/layout/Layout.vue'),
    children: [
      {
        path: '',
        name: 'ArticleList',
        component: () => import('@/views/index/ArticleList.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: 'page/:page',
        name: 'Page',
        component: () => import('@/views/index/ArticleList.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: 'article/:id',
        name: 'ArticleDetail',
        component: () => import('@/views/index/ArticleDetail.vue')
      },

      {
        path: '/tool',
        name: 'tool',
        component: () => import('@/views/tool/index.vue'),
        meta: {
          title: '常用工具'
        }
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
