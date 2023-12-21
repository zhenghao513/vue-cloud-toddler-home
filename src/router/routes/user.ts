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
]

export default userRoutes
