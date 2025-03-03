import axios from 'axios'
// import { useRouter } from 'vue-router'
import router from '@/router'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user'
const httpBase = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})
// axios请求拦截器
httpBase.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpBase.interceptors.response.use(res => res.data, e => {
  console.log(e, "aaaaaaaaaaa");

  ElMessage({
    type: 'warning',
    message: e.response.data.message
  })
  if (e.response.status === 401) {
    //
    const userStore = useUserStore()
    // const router = useRouter()
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(e)
})


export default httpBase
