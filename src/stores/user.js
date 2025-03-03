import { defineStore } from 'pinia'
import { ref } from 'vue'
import { findLoginAPI } from '@/apis/user'

export const useUserStore = defineStore('user', () => {
  // 1. 定义管理用户数据的state
  const userInfo = ref({})
  // 2. 定义获取接口数据的action函数
  const getUserInfo = async ({ account, password }) => {
    const res = await findLoginAPI({ account, password })
    userInfo.value = res.result
  }
  const clearUserInfo = () => {
    userInfo.value = {}
  }
  // 3.s 以对象的格式把state和action return
  return {
    getUserInfo,
    userInfo,
    clearUserInfo
  }
}, {
  persist: true
})


// }, {
//   persist: true,
// })
