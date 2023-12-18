import { RouteRecordRaw } from 'vue-router'

const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/daily-sign-in',
    name: 'DailySignIn',
    meta: { title: '每日签到' },
    component: () => import('@/views/DailySignIn.vue'),
  },
  {
    path: '/suggestion-center',
    name: 'SuggestionCenter',
    meta: { title: '建议中心' },
    component: () => import('@/views/SuggestionCenter.vue'),
  },
  {
    path: '/characteristic-course',
    name: 'CharacteristicCourse',
    meta: { title: '特色课程' },
    component: () => import('@/views/CharacteristicCourse.vue'),
  },
]

export default homeRoutes
