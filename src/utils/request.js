import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getAuthHeader } from './encrypt'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 600000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {

    NProgress.start();
    // do something before request is sent
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

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 0) {
      alert('出错了')

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      // }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    NProgress.done()
    console.log('err' + error) // for debug
    alert('出错了')
    return Promise.reject(error)
  }
)

export default service
