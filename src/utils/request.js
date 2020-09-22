import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
var host = window.location.host
// host = 'http://' + host
host = process.env.NODE_ENV == 'production' ? 'http://' + host : 'http://ccrerp.schuee.net/'
const service = axios.create({
  baseURL: host, // api的base_url
  withCredentials: true,
  timeout: 100000 // request timeout
})
// 请求前进行统一处理
service.interceptors.request.use(
  function (config) {
    let getSessionCode = window.localStorage.getItem("sessionCode");
    if (config.method == 'get') {
      if (config.params) {
        config.params.sessionCode = getSessionCode;
      } else {
        config.params = { 'sessionCode': getSessionCode };
      }
    }
    if (config.method == 'post') {
      if (config.data) {
        config.data.sessionCode = getSessionCode;
      } else {
        config.data = { 'sessionCode': getSessionCode };
      }
    }
    Vue.globalEvBus.$emit('showLoading')
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 请求后进行统一处理
service.interceptors.response.use(
  response => {
    Vue.globalEvBus.$emit('hideLoading')

    if (response.data.status == 0 && response.data.msg == '校验失败，请重新登录') {
      store.dispatch('FedLogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    } else {
      if (response.data.status == 0 && response.data.msg != '') {
        Message({
          message: response.data.msg,
          type: 'error',
          duration: 3 * 1000
        })
      }
      return response
    }
  },
  error => {
    Vue.globalEvBus.$emit('hideLoading')
    Message({
      message: '请求超时，请重试！',
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)
Object.defineProperties(Vue.prototype, {
  hostURL: {
    get: function () {
      return host
    }
  },
  request: {
    get: function () {
      return service
    }
  }
})
export default service
