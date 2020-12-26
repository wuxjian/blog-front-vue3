import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import alertify from '@/utils/alert'
import {getToken, removeToken} from '@/utils/auth'
import { getAuthHeader } from './encrypt'
import {useRouter, useRoute} from 'vue-router'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 600000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {

    NProgress.start();
    const token = getToken()
    if (token) {
      config.headers['X-Token'] = getToken()
    }
    config.headers['X-Auth'] = getAuthHeader()
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    NProgress.done()
    const res = response.data

    if (res.code !== 0) {
      if (res.code === 502 || res.code === 503) {
        removeToken()
        const route = useRoute();
        if (route.meta['loginValidate']) {
          const router = useRouter();
          router.push('/login')
          return
        }
      }
      return Promise.reject(new Error(res.msg || 'something is wrong'))
    } else {
      return res
    }
  },
  error => {
    NProgress.done()
    alertify.message('网络开了小差~', 3);
    return Promise.reject(error)
  }
)

export default service
