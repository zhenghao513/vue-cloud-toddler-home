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
  {
    path: '/visited-garden',
    name: 'VisitedGarden',
    meta: { title: '园所参观' },
    component: () => import('@/views/VisitedGarden.vue'),
  },
  {
    path: '/introduce',
    name: 'Introduce',
    meta: { title: '园所介绍' },
    component: () => import('@/views/VisitedGardenIntroduce.vue'),
  },
  {
    path: '/environment-indoor',
    name: 'EnvironmentIndoor',
    meta: { title: '室内环境' },
    component: () => import('@/views/VisitedGardenEnvironmentIndoor.vue'),
  },
  {
    path: '/environment-outdoor',
    name: 'EnvironmentOutdoor',
    meta: { title: '室外环境' },
    component: () => import('@/views/VisitedGardenEnvironmentOutdoor.vue'),
  },
]

export default homeRoutes
