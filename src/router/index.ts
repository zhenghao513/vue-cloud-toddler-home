import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
