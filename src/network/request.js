import axios from 'axios'

export function request(config) {
  //1、创建axios 实例
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    // baseURL: 'http://152.136.185.210:7878/api/hy66',
    baseURL: 'http://localhost:8080',
    timeout: 5000
  })


  //2、axios 拦截器
 //请求拦截
instance.interceptors.request.use(config => {
  return config
}, err => {
  // 请求失败
})

//响应拦截
instance.interceptors.response.use(result => {
  return result
}, err => {
  //响应失败
})
  
  // 3.发送网络请求
  return instance(config)
}

