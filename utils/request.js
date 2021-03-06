// 封装AXIOS
import axios from 'axios'
import cookie from 'js-cookie'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://192.168.0.110:9001', // api的base_url
  timeout: 20000 // 请求超时时间
})

// http request拦截器
service.interceptors.request.use(config => {
  if (cookie.get('guli_token')) {
    config.headers['token'] = cookie.get('guli_token')
  }
  return config
})
export default service
