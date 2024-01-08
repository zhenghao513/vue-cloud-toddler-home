import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import homeRoutes from './routes/home'
import userRoutes from './routes/user'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: { title: '首页' },
    component: () => import('@/views/Home.vue'),
    alias: '/home',
  },
  {
    path: '/user',
    name: 'user',
    meta: { title: '我' },
    component: () => import('@/views/User.vue'),
  },
  ...homeRoutes,
  ...userRoutes,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  // @ts-ignore: It's ok to ignore this compile error
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { top: 0 }
  },
})

export default router
