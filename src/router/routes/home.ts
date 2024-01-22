import { RouteRecordRaw } from 'vue-router'

const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/clock-in',
    name: 'ClockIn',
    meta: { title: '每日签到' },
    component: () => import('@/views/ClockIn.vue'),
  },
  {
    path: '/suggestion',
    name: 'Suggestion',
    meta: { title: '建议中心' },
    component: () => import('@/views/Suggestion.vue'),
  },
  {
    path: '/course',
    name: 'Course',
    meta: { title: '特色课程' },
    component: () => import('@/views/Course.vue'),
  },
  {
    path: '/recipe',
    name: 'Recipe',
    meta: { title: '今日菜谱' },
    component: () => import('@/views/Recipe.vue'),
  },
  {
    path: '/photo',
    name: 'Photo',
    meta: { title: '精彩瞬间' },
    component: () => import('@/views/Photo.vue'),
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
  {
    path: '/apply',
    name: 'Apply',
    meta: { title: '报名申请' },
    component: () => import('@/views/Apply.vue'),
  },
  {
    path: '/apply-begin',
    name: 'ApplyBegin',
    meta: { title: '新幼儿报名' },
    component: () => import('@/views/ApplyDetail.vue'),
  },
  {
    path: '/apply-origin',
    name: 'ApplyOrigin',
    meta: { title: '原幼儿报名' },
    component: () => import('@/views/ApplyDetail.vue'),
  },
  {
    path: '/apply-detail-survey',
    name: 'ApplyDetailSurvey',
    meta: { title: '问卷调查' },
    component: () => import('@/views/ApplyDetailSurvey.vue'),
  },
  {
    path: '/assess',
    name: 'Assess',
    meta: { title: '成长评估' },
    component: () => import('@/views/Assess.vue'),
  },
]

export default homeRoutes
