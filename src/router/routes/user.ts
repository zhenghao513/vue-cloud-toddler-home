import { RouteRecordRaw } from 'vue-router'

const userRoutes: RouteRecordRaw[] = [
  {
    path: '/contact',
    name: 'Contact',
    meta: { title: '联系我们' },
    component: () => import('@/views/Contact.vue'),
  },
  {
    path: '/visit-appointment',
    name: 'VisitAppointment',
    meta: { title: '预约参观' },
    component: () => import('@/views/VisitAppointment.vue'),
  },
  {
    path: '/user-profile-edit',
    name: 'UserProfileEdit',
    meta: { title: '编辑资料' },
    component: () => import('@/views/UserProfileEdit.vue'),
  },
  {
    path: '/user-setting',
    name: 'UserSetting',
    meta: { title: '设置' },
    component: () => import('@/views/UserSetting.vue'),
  },
  {
    path: '/settings-language',
    name: 'SettingsLanguage',
    meta: { title: '语言' },
    component: () => import('@/views/SettingsLanguage.vue'),
  },
]

export default userRoutes
