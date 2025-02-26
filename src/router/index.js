import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '@/views/Layout/Index.vue'
import LoginView from '@/views/Login/Index.vue'
import CategoryView from '@/views/Category/index.vue'
import HomeView from '@/views/Home/index.vue'
import SubCategory from "@/views/subCategory/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutView,
      children: [
        {
          path: '',
          component: HomeView
        },
        {
          path: 'category/:id',
          component: CategoryView
        },
        {
          path: 'category/sub/:id',
          component: SubCategory
        }
      ]
    },
    {
      path: '/login',
      component: LoginView
    }


  ],
})

export default router
