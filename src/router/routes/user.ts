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
    path: '/userinfo-edit',
    name: 'UserinfoEdit',
    meta: { title: '编辑资料' },
    component: () => import('@/views/UserinfoEdit.vue'),
  },
]

export default userRoutes
