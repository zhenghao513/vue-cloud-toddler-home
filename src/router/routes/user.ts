import { RouteRecordRaw } from 'vue-router'

const userRoutes: RouteRecordRaw[] = [
  {
    path: '/contact',
    name: 'Contact',
    meta: { title: '联系我们' },
    component: () => import('@/views/ContactUs.vue'),
  },
]

export default userRoutes
