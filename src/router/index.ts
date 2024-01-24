import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import homeRoutes from './routes/home'
import userRoutes from './routes/user'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    beforeEnter: (_to, _from, next) => {
      const isAuthenticated = document.cookie.replace(
        /(?:(?:^|.*;\s*)isAuthenticated\s*\=\s*([^;]*).*$)|^.*$/,
        '$1',
      )
      if (isAuthenticated === 'true') {
        next({ name: 'Home' })
      } else {
        next()
      }
    },
  },
  {
    path: '/',
    redirect: () => {
      const isAuthenticated = document.cookie.replace(
        /(?:(?:^|.*;\s*)isAuthenticated\s*\=\s*([^;]*).*$)|^.*$/,
        '$1',
      )
      if (isAuthenticated === 'true') {
        return { name: 'Home' }
      }

      return { name: 'Login' }
    },
  },
  {
    path: '/',
    name: 'Home',
    meta: { title: '首页' },
    component: () => import('@/views/Home.vue'),
    alias: '/home',
  },
  {
    path: '/user',
    name: 'User',
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

router.beforeEach(async (to) => {
  const isAuthenticated = document.cookie.replace(
    /(?:(?:^|.*;\s*)isAuthenticated\s*\=\s*([^;]*).*$)|^.*$/,
    '$1',
  )

  if (isAuthenticated === 'false' && to.name !== 'Login') {
    return { name: 'Login' }
  }
})

export default router
