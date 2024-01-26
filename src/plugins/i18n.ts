import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    home: {
      apply: 'Apply',
      assess: 'Assess',
      recipe: 'Recipe',
      photo: 'Photo',
      visit: 'Visit',
      course: 'Course',
      suggestion: 'Suggestion',
      clockIn: 'Clock In',
    },
  },
  zh: {
    home: {
      apply: '报名申请',
      assess: '成长评估',
      recipe: '今日菜谱',
      photo: '精彩瞬间',
      visit: '园所参观',
      course: '特色课程',
      suggestion: '建议中心',
      clockIn: '每日签到',
    },
  },
}

const i18n = createI18n({
  locale: 'zh',
  fallbackLocale: 'en',
  messages,
})

export default i18n
