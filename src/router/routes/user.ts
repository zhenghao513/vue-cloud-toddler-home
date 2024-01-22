import { RouteRecordRaw } from 'vue-router'

const userRoutes: RouteRecordRaw[] = [
  {
    path: '/contact',
    name: 'Contact',
    meta: { title: '联系我们' },
    component: () => import('@/views/ContactUs.vue'),
  },
  {
    path: '/visited-garden-appointment',
    name: 'VisitedGardenAppointment',
    meta: { title: '预约参观' },
    component: () => import('@/views/VisitedGardenAppointment.vue'),
  },
  {
    path: '/user-profile-edit',
    name: 'UserProfileEdit',
    meta: { title: '编辑资料' },
    component: () => import('@/views/UserProfileEdit.vue'),
  },
]

export default userRoutes
