import { RouteRecordRaw } from 'vue-router'

const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/daily-sign-in',
    name: 'DailySignIn',
    meta: { title: '每日签到' },
    component: () => import('@/views/DailySignIn.vue'),
  },
]

export default homeRoutes
