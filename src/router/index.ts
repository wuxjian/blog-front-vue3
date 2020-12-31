import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import {title} from "@/model/model";
import {getToken} from '@/utils/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
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
    ]
  },
  {
    path: '/tool',
    component: () => import('@/views/layout/Layout.vue'),
    children: [
      {
        path: '',
        name: 'tool',
        component: () => import('@/views/tool/Tool.vue'),
        redirect: '/tool/json',
        meta: {
          title: '常用工具'
        },
        children: [
          {
            path: 'json',
            name: 'json',
            component: () => import('@/views/tool/json_format/JsonFormat.vue'),
            meta: {
              title: 'JSON格式化'
            }
          },
          {
            path: 'md5',
            name: 'md5',
            component: () => import('@/views/tool/md5/MD5.vue'),
            meta: {
              title: 'MD5'
            }
          },
          {
            path: 'urlEncode',
            name: 'urlEncode',
            component: () => import('@/views/tool/url_encode/UrlEncode.vue'),
            meta: {
              title: 'UrlEncode|UrlDecode'
            }
          },
          {
            path: 'qrcode',
            name: 'qrcode',
            component: () => import('@/views/tool/qrcode/Qrcode.vue'),
            meta: {
              title: '二维码'
            }
          },
        ]
      },
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/admin/Admin.vue'),
    meta: {
      loginValidate: false
    },
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/admin/dashboard/Dashboard.vue'),
        meta: {
          title: 'Dashboard'
        }
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/admin/dashboard/Dashboard.vue'),
        meta: {
          title: 'Dashboard'
        }
      },
      {
        path: 'upgrade',
        name: 'upgrade',
        component: () => import('@/views/admin/upgrade/Upgrade.vue'),
        meta: {
          title: '升级'
        }
      },
      {
        path: 'article/list',
        name: 'AdminArticleList',
        component: () => import('@/views/admin/article/ArticleList.vue'),
        meta: {
          title: '文章列表'
        }
      }
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue'),
    meta: {
      title: '登录'
    }
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
  if (to.meta['loginValidate'] && !getToken()) {
    router.push('/login')
  }
  next()
})

export default router
