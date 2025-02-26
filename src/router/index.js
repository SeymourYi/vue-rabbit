import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '@/views/Layout/Index.vue'
import LoginView from '@/views/Login/Index.vue'
import CategoryView from '@/views/Category/index.vue'
import HomeView from '@/views/Home/index.vue'

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
